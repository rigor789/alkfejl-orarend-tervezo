package hu.elte.alkfejl.orarend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

// touched
@SpringBootApplication
public class OrarendApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrarendApplication.class, args);
	}
	//sdkajfhsdalkjfhslkfjshdfkljh

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}
