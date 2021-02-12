package com.arcor.springsecurityldap.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.arcor.springsecurityldap.models.ResponseOk;

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
    /*@GetMapping("/")
    public ModelAndView method() {
            String projectUrl = "https://idpa.webaccess.arcor.com/nidp/portal?locale=es_ES";
            return new ModelAndView("redirect:" + projectUrl);

    }*/
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/home")
    public ResponseEntity<ResponseOk> home() {
    	
    	ResponseOk response = new ResponseOk();
    	
    	response.saludo = "Hola Gil!";
    	
        return ResponseEntity.ok(response);
    }

    
}
