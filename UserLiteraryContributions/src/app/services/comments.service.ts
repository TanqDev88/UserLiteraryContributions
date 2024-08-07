import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getCommentsByPost():Observable<Comentario[]>{
    return this.http.get<Comentario[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
