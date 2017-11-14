package hu.elte.alkfejl.orarend.service;

import org.springframework.stereotype.Service;
import sun.misc.IOUtils;

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

    public ArrayList<String> getByName(String name) throws IOException {
         StringBuilder sb = new StringBuilder();

         sb.append("melyik=nevalapjan");
         sb.append("&felev=" + URLEncoder.encode(this.felev, "UTF-8"));
         sb.append("&limit=100");
         sb.append("&targynev=" + URLEncoder.encode(name, "UTF-8"));


        InputStream is = this.postRequest(this.scheduleEndopoint, sb.toString());

        String result = new BufferedReader(new InputStreamReader(is)).lines()
                .parallel().collect(Collectors.joining("\n"));


        ArrayList<String> arrayList = new ArrayList<>();
        arrayList.add(result);
        // Todo: call parser fn with result which will return the array of records

        return arrayList;
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
