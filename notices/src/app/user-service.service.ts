import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { createInjectableType } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})

export class UserServiceService {
  
  constructor(private http:HttpClient) { }
  getData(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
