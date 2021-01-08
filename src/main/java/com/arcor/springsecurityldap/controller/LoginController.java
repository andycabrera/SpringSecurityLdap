package com.arcor.springsecurityldap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }
    
    @GetMapping("/")
    public String start() {
        return "home";
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
