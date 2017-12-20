package hu.elte.alkfejl.orarend.api;

import hu.elte.alkfejl.orarend.annotation.Role;
import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.model.UserComment;
import hu.elte.alkfejl.orarend.repository.UserRepository;
import hu.elte.alkfejl.orarend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @Role({User.Role.ADMIN, User.Role.DEVELOPER})
    @GetMapping()
    public ResponseEntity<Iterable<User>> all() {
        return ResponseEntity.ok(userRepository.findAll());

    }


    @Role({User.Role.ADMIN, User.Role.DEVELOPER})
    @GetMapping("/{id}")
    public ResponseEntity<User> findOne(@PathVariable int id) {
        return ResponseEntity.ok(userRepository.findOne(id));
    }


    @Role({User.Role.ADMIN, User.Role.DEVELOPER})
    @PostMapping("/{id}")
    public ResponseEntity<User> save(@PathVariable int id, @RequestBody User user) {
        return ResponseEntity.ok(this.userService.update(id, user));
    }

    @Role({User.Role.ADMIN, User.Role.DEVELOPER})
    @PostMapping("/{id}/comment")
    public ResponseEntity<User> comment(@PathVariable int id, @RequestBody UserComment comment) {
        return ResponseEntity.ok(this.userService.comment(id, comment));
    }
}
