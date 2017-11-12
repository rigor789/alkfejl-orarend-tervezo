package hu.elte.alkfejl.orarend.controller;

import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute(new User());

        return "auth/login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute User user, Model model) {
        if (userService.isValid(user)) {
            return this.redirect("/welcome");
        }
        model.addAttribute("loginFailed", true);

        return "auth/login";
    }


    @GetMapping("/register")
    public String register(Model model) {
       model.addAttribute("user", new User());

       return "auth/register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute User user) {
        userService.register(user);

        return this.redirect("/welcome");
    }

    private String redirect(String to) {
        return "redirect:" + to;
    }
}
