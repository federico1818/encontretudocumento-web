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
        p.number = '35112252'
        p.type = 'DNI'
        this._posts.next([p, p, p, p])
    }
}
