package hu.elte.alkfejl.orarend.service;

import hu.elte.alkfejl.orarend.model.Course;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class ScheduleService {

    private final String scheduleEndopoint = "http://to.ttk.elte.hu/test.php";
    private String felev = "2017-2018-1";

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
        String first = /*inp.replaceAll("</td><td>","\t").replaceAll("</td></tr><tr><td>","\n").*/inp.replaceAll("</td></tr></table>","").replaceAll("<table><tr><td>","");
        String[] lines = first.split("</td></tr><tr><td>");
        ArrayList<Course> courses = new ArrayList<>();
        for (int i=1; i<lines.length; i++) {
            courses.add(new Course(lines[i]));
            System.out.println(courses.get(i-1).toString());
        }
        return courses;
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
