package com.example.akgun.odev.insan_kaynaklari.starter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = "com.example.akgun.odev.insan_kaynaklari")
@ComponentScan(basePackages = "com.example.akgun.odev.insan_kaynaklari")
@EnableJpaRepositories(basePackages = "com.example.akgun.odev.insan_kaynaklari")
@SpringBootApplication
public class InsanKaynaklariApplication {

	public static void main(String[] args) {
		SpringApplication.run(InsanKaynaklariApplication.class, args);
	}

}
