package hu.elte.alkfejl.orarend.api;

import hu.elte.alkfejl.orarend.service.UserService;
import hu.elte.alkfejl.orarend.service.exceptions.InvalidUserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import hu.elte.alkfejl.orarend.model.User;

@RestController
@RequestMapping("/api/auth")
public class AuthApiController {

    private final UserService userService;
    @Autowired
    public AuthApiController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(this.userService.login(user));
        } catch (InvalidUserException e) {
            return ResponseEntity.status(401).build();
        }
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        return ResponseEntity.ok(this.userService.register(user));
    }

    @PostMapping("/logout")
    public ResponseEntity<Boolean> logout() {
        this.userService.setUser(new User());
        return ResponseEntity.ok(true);
    }
}
