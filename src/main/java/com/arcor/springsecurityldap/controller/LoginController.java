package com.arcor.springsecurityldap.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }
    
    // @GetMapping("/")
    // public String start() {
    //     return "home";
    // }
    @GetMapping("/")
    public ModelAndView method() {
            String projectUrl = "https://idpa.webaccess.arcor.com/nidp/portal?locale=es_ES";
            return new ModelAndView("redirect:" + projectUrl);

    }
    
    @GetMapping("/home")
    public String home() {
        return "home";
    }

    
}
