package hu.elte.alkfejl.orarend.service;

import hu.elte.alkfejl.orarend.model.Course;
import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.repository.UserRepository;
import hu.elte.alkfejl.orarend.service.exceptions.InvalidUserException;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class TimetableService {

    private final UserRepository userRepository;

    private User user;

    @Autowired
    public TimetableService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void addCourse(int id, Course course) {
        User user = this.userRepository.findOne(id);
        user.getCourses().add(course);

        this.userRepository.save(user);
    }

    public boolean isLoggedIn() {
        return this.user != null;
    }
}
