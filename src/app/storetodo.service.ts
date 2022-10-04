import { Injectable } from '@angular/core';
import { ToDo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StoretodoService {
  constructor(private httpClient: HttpClient) {}

  // getNotes(): Observable<Array<ToDo>> {
  //   return this.httpClient.get<Array<ToDo>>('http://localhost:3000/todo');
  // }

  addToDo(todo: ToDo): Observable<ToDo> {
    console.log('TODO FROM SERVICE: ' + todo.content);

    return this.httpClient.post<ToDo>('http://localhost:3000/todo', todo);
  }
}
