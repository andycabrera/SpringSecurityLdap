package com.arcor.springsecurityldap.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.LdapShaPasswordEncoder;
import org.springframework.security.ldap.userdetails.UserDetailsContextMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebSecurity
@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    // @Bean
    // public CorsConfigurationSource corsConfigurationSource() {
    //     final CorsConfiguration configuration = new CorsConfiguration();
    //     configuration.setAllowedOrigins(ImmutableList.of("*"));
    //     configuration.setAllowedMethods(ImmutableList.of("HEAD",
    //             "GET", "POST", "PUT", "DELETE", "PATCH"));
    //     // setAllowCredentials(true) is important, otherwise:
    //     // The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
    //     configuration.setAllowCredentials(true);
    //     // setAllowedHeaders is important! Without it, OPTIONS preflight request
    //     // will fail with 403 Invalid CORS request
    //     configuration.setAllowedHeaders(ImmutableList.of("Authorization", "Cache-Control", "Content-Type"));
    //     final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    //     source.registerCorsConfiguration("/**", configuration);
    //     return source;
    // }

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**")
    //             .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
    // }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        // CODIGO PARA LA CONEXION CON EL SERVIDOR LDAP, FUNCIONA CORRECTAMENTE EL LOGIN
        auth.ldapAuthentication().userDetailsContextMapper(inetOrgPersonContextMapper()).userSearchFilter("(cn={0})")
                .userSearchBase("ou=usuarios,o=arcor").groupSearchBase("ou=grupos,o=Arcor").groupSearchFilter("cn={0}")
                .contextSource().url("ldap://10.130.1.166/").port(389)
                .managerDn("cn=ugldap,ou=Genericos,ou=Usuarios,o=Arcor").managerPassword("Cdspv4yS");
    }

    private UserDetailsContextMapper inetOrgPersonContextMapper() {
        return null;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.httpBasic().and().authorizeRequests().anyRequest().authenticated().and().csrf().disable();

        /*
         * http.authorizeRequests() .anyRequest().fullyAuthenticated() .and()
         * .formLogin() .loginPage("/login") .permitAll();
         */
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring().antMatchers("/css/**", "/js/**", "/img/**");
    }
}
