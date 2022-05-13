import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

import {UserInterface} from '../models';
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this
      .http
      .get<UserInterface[]>(urls.users);
  }

}
