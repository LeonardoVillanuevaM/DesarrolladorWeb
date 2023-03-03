package com.blog.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.engine.AttributeName;

import com.blog.configuration.Pages;
import com.blog.model.Post;

import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/home")
public class ControllerServer {
	
	public List<Post> getPosts(){
		ArrayList<Post> post = new ArrayList<>();
		post.add(new Post(1, 
				"Este framework está basado en el lenguaje JavaScript y desarrollado en TypeScript por los programadores de Google.",
				"http://localhost:5050/img/angular.png",
				 new Date(),
				 "Angular"));
		post.add(new Post(2,
				"Laravel ofrece una estructura bastante moderna con utilidades potentes para crear una aplicación web de alto nivel.",
				"http://localhost:5050/img/laravel.png",
				 new Date(),
				 "Laravel"));
		post.add(new Post(3,
				"Symfony es una herramienta sumamente útil para crear aplicaciones web en PHP de código abierto, que se usa mucho en Europa.",
				"http://localhost:5050/img/symfony.png",
				 new Date(),
				 "Symfony"));
		post.add(new Post(4,
				"Spring cuenta inyección de dependencias, la cual permite la unión, el mantenimiento y la reutilización de clases complejas",
				"http://localhost:5050/img/spring.png",
				new Date(),
				"Spring"));
		return post;
	}
	
	@GetMapping(path = "/post")
	public String iniciar(Model model) {
		model.addAttribute("posts", getPosts());
		return "index";
	}
	
	@GetMapping(path="/public")
	public ModelAndView post() {
		ModelAndView modelAndView = new ModelAndView(Pages.HOME);
		modelAndView.addObject("posts", this.getPosts());
		return modelAndView;
	}
	
	@GetMapping(path="post")
	public ModelAndView getPostIndividual(
			@RequestParam(defaultValue = "1", required = false) int id
			) {
		ModelAndView modelAndView = new ModelAndView(Pages.POST);
		List<Post> postFiltrado = this.getPosts().stream().filter((p) ->{
			return p.getId() == id;
		}).collect(Collectors.toList());
		modelAndView.addObject("post",postFiltrado.get(0));
		return modelAndView;
	}
	//Para acceder al sitio: localhost:5050
	
	
}

