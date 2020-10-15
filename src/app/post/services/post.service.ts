import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { Post } from 'src/app/core/post'

@Injectable({
    providedIn: 'root'
})

export class PostService {
    protected _posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([])
    public readonly posts: Observable<Post[]> = this._posts.asObservable()
    
    constructor() {}

    public all(): void {
        let p = new Post
        p.id = 1
        p.number = '35112252'
        p.type = 'DNI'
        p.image = 'document.jpg'
        
        let p2 = new Post
        p2.id = 2
        p2.number = 'xvvcs12312'
        p2.type = 'Pasaporte'
        p2.image = 'document-2.jpg'
        this._posts.next([p, p2, p, p2])
    }

    public save(post: Post): void {
        let posts: Post[] = this._posts.getValue()
        posts.unshift(post)
        this._posts.next(posts)
    }

    public find(id: number): Post {
        let p2 = new Post
        p2.id = 2
        p2.number = 'xvvcs12312'
        p2.type = 'Pasaporte'
        p2.image = 'document-2.jpg'

        return p2
    }
}
