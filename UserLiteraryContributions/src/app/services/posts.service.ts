import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPostsByUser():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
