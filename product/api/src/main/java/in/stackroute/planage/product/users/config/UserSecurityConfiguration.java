package in.stackroute.planage.product.users.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableOAuth2Sso
@EnableWebSecurity
@Configuration
public class UserSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web){
        web.ignoring().antMatchers("/resources/**","/api/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/login").permitAll().anyRequest().authenticated();
        http.csrf().disable();
    }

//@EnableOAuth2Sso
//@EnableWebSecurity
//@Configuration
//public class UserSecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//    @Override
//    public void configure(WebSecurity web){
//        web.ignoring().antMatchers("/resources/**");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests().antMatchers("/login").permitAll().anyRequest().authenticated();
//        http.csrf().disable();
//    }

//
//  @Override
//  public void configure(AuthenticationManagerBuilder authenticationMgr) throws Exception {
//    authenticationMgr.inMemoryAuthentication().withUser("admin").password("admin")
//            .authorities("ROLE_ADMIN");
//  }
}
