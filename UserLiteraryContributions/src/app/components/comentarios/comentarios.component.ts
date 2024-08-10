import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../../models/comment';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios!: Comentario[];

  constructor(private route: ActivatedRoute, private commentsService: CommentsService) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params["id"];

    this.commentsService.getCommentsByPost().subscribe(
      data =>{this.comentarios=data.filter(x => x.postId == id)},
      error => console.error('Fallo el request al API REST')

    );
  }

}
