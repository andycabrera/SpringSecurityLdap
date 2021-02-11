package com.arcor.springsecurityldap.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.arcor.springsecurityldap.models.UserModel;

import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Controller
public class LoginController {

    // @Bean
    // public WebMvcConfigurer corsConfigurer() {
    //     return new WebMvcConfigurer(){
    
    //         @Override
    //         public void addCorsMappings(CorsRegistry registry) {
    //         registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
    //         }
    //     };
    // }

    @GetMapping("/loginn")
    public ResponseEntity<UserModel> loginMethod() {
        UserModel user = new UserModel("Andres", "Cabrera");
        return ResponseEntity.ok(user);
    }
    
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
