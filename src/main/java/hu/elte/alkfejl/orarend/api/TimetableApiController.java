package hu.elte.alkfejl.orarend.api;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import hu.elte.alkfejl.orarend.model.Course;
import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.repository.CourseRepository;
import hu.elte.alkfejl.orarend.service.TimetableService;
import hu.elte.alkfejl.orarend.service.UserService;
import hu.elte.alkfejl.orarend.service.exceptions.InvalidUserException;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/timetable")
public class TimetableApiController {

    private final UserService userService;
    private final TimetableService timetableService;
    private final CourseRepository courseRepository;

    @Autowired
    public TimetableApiController(UserService userService, TimetableService timetableService, CourseRepository courseRepository) {
        this.userService = userService;
        this.timetableService = timetableService;
        this.courseRepository = courseRepository;
    }

    @PostMapping("/select")
    public ResponseEntity<Boolean> select(@RequestBody SelectBody selected) {
        System.out.println(selected.getSubCode() + " --- " +  selected.getCourseCode());
        Optional<Course> optCourse = this.courseRepository.findBySubCodeAndCourseCode(selected.getSubCode(), selected.getCourseCode());
        System.out.println(optCourse);

        if (optCourse.isPresent()) {
            this.timetableService.addCourse(selected.getUserId(), optCourse.get());
            return ResponseEntity.ok(true);
        }

        return ResponseEntity.badRequest().build();
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    private static class SelectBody {
        private int userId;
        private String subCode;
        private int courseCode;
    }
}
