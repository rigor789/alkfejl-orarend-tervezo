package hu.elte.alkfejl.orarend.api;

import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.repository.UserRepository;
import hu.elte.alkfejl.orarend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/users")
public class UsersApiController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UsersApiController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping()
    public ResponseEntity<Iterable<User>> all() {
        return ResponseEntity.ok(userRepository.findAll());

        /*
        todo: figure out sessions / tokens
        if (!this.userService.isLoggedIn()) {
            return ResponseEntity.status(401).build();
        }

        User.Role role = this.userService.getUser().getRole();
        if (role != User.Role.ADMIN || role != User.Role.DEVELOPER) {
            return ResponseEntity.status(401).build();
        }*/

    }


}
