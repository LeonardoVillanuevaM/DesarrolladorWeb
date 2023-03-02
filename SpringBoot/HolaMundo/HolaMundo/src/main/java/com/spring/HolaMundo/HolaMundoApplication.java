package com.spring.HolaMundo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class HolaMundoApplication {

	public static void main(String[] args) {
		SpringApplication.run(HolaMundoApplication.class, args);
	}
	@GetMapping("/hola")
	public String hello(@RequestParam(value="name", defaultValue="World") String name){
		return String.format("Hello %s!", name);
	}
	//Acceder con el link = http://localhost:8080/hola?name=Leonardo
}
