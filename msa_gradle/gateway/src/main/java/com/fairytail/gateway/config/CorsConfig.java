package com.fairytail.gateway.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;

@Configuration
public class CorsConfig {

    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "https://k7c209.p.ssafy.io", "https://k7c2091.p.ssafy.io")
                .allowedMethods("*");
    }
}