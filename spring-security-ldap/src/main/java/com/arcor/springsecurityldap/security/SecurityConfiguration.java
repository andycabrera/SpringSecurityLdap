package com.arcor.springsecurityldap.security;

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

@EnableWebSecurity
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception{

        // CODIGO PARA LA CONEXION CON EL SERVIDOR LDAP, FUNCIONA CORRECTAMENTE EL LOGIN
        auth.ldapAuthentication()
            .userDetailsContextMapper(inetOrgPersonContextMapper())
            .userSearchFilter("(cn={0})")
            .userSearchBase("ou=usuarios,o=arcor")
            .groupSearchBase("ou=grupos,o=Arcor")
            .groupSearchFilter("cn={0}")
            .contextSource()
            .url("ldap://10.130.1.166/")
            .port(389)
            .managerDn("cn=ugldap,ou=Genericos,ou=Usuarios,o=Arcor")
            .managerPassword("Cdspv4yS");
    }


    private UserDetailsContextMapper inetOrgPersonContextMapper() {
		return null;
	}


	@Override
    protected void configure(HttpSecurity http) throws Exception{
        
		http.httpBasic().and().authorizeRequests().anyRequest().authenticated().and().csrf().disable();
		
		/*http.authorizeRequests()
                .anyRequest().fullyAuthenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .permitAll();*/
    }
	
	 
	@RequestMapping
    public Authentication getAuth() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

    @Override
    public void configure(WebSecurity web) {
    web.ignoring().antMatchers("/css/**", "/js/**","/img/**");
    }
}
