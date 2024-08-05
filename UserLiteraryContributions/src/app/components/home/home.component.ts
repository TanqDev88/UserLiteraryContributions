import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts!: Post[];
  user = localStorage.getItem('Usuario');

  constructor(private postService : PostsService) { }

  ngOnInit(): void {

    this.postService.getPostsByUser().subscribe(
      data =>{this.posts=data.filter(x => x.userId.toString() == localStorage.getItem('Id'))},
      error => console.error('Fallo el request al API REST')

    );

  }




}
