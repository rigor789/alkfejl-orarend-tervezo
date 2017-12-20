package hu.elte.alkfejl.orarend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
public class OrarendApplication extends WebMvcConfigurerAdapter {

    @Autowired
    private HandlerInterceptor authInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor);
    }


    public static void main(String[] args) {
        SpringApplication.run(OrarendApplication.class, args);

    }

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}
