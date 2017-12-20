package hu.elte.alkfejl.orarend.service;

import hu.elte.alkfejl.orarend.model.Course;
import hu.elte.alkfejl.orarend.repository.CourseRepository;

import hu.elte.alkfejl.orarend.service.schedule.Interval;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.xml.transform.Source;

import org.springframework.beans.factory.annotation.Autowired;


@Service
public class ScheduleService {

    private final CourseRepository courseRepository;
    private final String scheduleEndopoint = "http://to.ttk.elte.hu/test.php";
    private String felev = "2017-2018-1";

    @Autowired
    public ScheduleService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public ArrayList<Course> getByName(String name) throws IOException {
         StringBuilder sb = new StringBuilder();

         sb.append("melyik=nevalapjan");
         sb.append("&felev=" + URLEncoder.encode(this.felev, "UTF-8"));
         sb.append("&limit=100");
         sb.append("&targynev=" + URLEncoder.encode(name, "UTF-8"));


        InputStream is = this.postRequest(this.scheduleEndopoint, sb.toString());

        String result = new BufferedReader(new InputStreamReader(is)).lines()
                .parallel().collect(Collectors.joining("\n"));

        return this.processTable(result);
    }

    private ArrayList<Course> processTable(String inp) {
        String first = inp.replaceAll("</td></tr></table>","").replaceAll("<table><tr><td>","");
        String[] lines = first.split("</td></tr><tr><td>");
        ArrayList<Course> courses = new ArrayList<>();
        for (int i=1; i<lines.length; i++) {//first line dropped
            try {
                Course course = this.createFromString(lines[i]);
                Optional<Course> f = this.courseRepository.findBySubCodeAndCourseCode(course.getSubCode(), course.getCourseCode());
                if(!f.isPresent()) {
                   courses.add(this.courseRepository.save(course));
                } else {
                    courses.add(f.get());
                }
            } catch(IllegalArgumentException ex) {
                System.err.println(ex.getMessage());
            } catch(Exception ex) {}
        }
        return courses;
    }

    private Course createFromString(String inp) {
        Course c = new Course();
        String[] splt = inp.split("</td><td>");
        c.setName(splt[0]);
        c.setSubCode(splt[1]);
        c.setInterval(new Interval(splt[2]));
        c.setRoom(splt[3]);
        c.setNote(splt[5]);

        if(splt[6].equals("gyakorlat"))
            c.setType(Course.CourseType.Practice);
        else if(splt[6].equals("elõadás"))
            c.setType(Course.CourseType.Presentation);
        else if(splt[6].equals("konzultáció"))
            c.setType(Course.CourseType.Consultation);
        else
            c.setType(Course.CourseType.Unknown);

        c.setCourseCode(Integer.parseInt(splt[7]));
        if(splt.length == 11)
            c.setTeacher("UNKNOWN");
        else
            c.setTeacher(splt[11]);

        return c;
    }

    private InputStream getRequest(String endpoint) throws IOException {
        URL url = new URL(endpoint);
        URLConnection connection = url.openConnection();

        return connection.getInputStream();
    }

    private InputStream postRequest(String endpoint, String query) throws IOException {
        URL url = new URL(endpoint);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("POST");
        connection.setDoOutput(true);
        connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        connection.setRequestProperty("Accept", "*/*");
        connection.setRequestProperty( "Content-Length", String.valueOf(query.length()));

        OutputStream os = connection.getOutputStream();
        os.write(query.getBytes());

        return connection.getInputStream();
    }

}
