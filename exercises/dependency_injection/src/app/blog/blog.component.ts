import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [AuthorService] // Providing AuthorService at the component level
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postService: PostService,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  getAuthorName(authorId: number): string {
    const author = this.authorService.getAuthorById(authorId);
    return author ? author.name : 'Unknown';
  }
}
