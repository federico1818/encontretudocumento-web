import { Component, OnInit } from '@angular/core'
import { PostService } from 'src/app/post/services/post.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
    constructor(
        protected postService: PostService
    ) {}
    
    ngOnInit(): void {
        this.postService.all()
    }
}