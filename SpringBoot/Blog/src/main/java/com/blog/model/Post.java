package com.blog.model;

import java.util.*;

public class Post {
	private int id;
	private String description;
	private String urlImg;
	private Date fecha;
	private String titulo;
	public int getId() {
		return id;
	}
	
	public Post(int id, String description, String urlImg, Date fecha, String titulo) {
		super();
		this.id = id;
		this.description = description;
		this.urlImg = urlImg;
		this.fecha = fecha;
		this.titulo = titulo;
	}
	
	public Post() {
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUrlImg() {
		return urlImg;
	}
	public void setUrlImg(String urlImg) {
		this.urlImg = urlImg;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	
}
