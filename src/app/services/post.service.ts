import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../models";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this
      .http
      .get<PostInterface[]>(urls.posts);
  }
}
