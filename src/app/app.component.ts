import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { ToDo } from '../app/todo';
import { StoretodoService } from './storetodo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: StoretodoService, private htttp: HttpClient) {}

  title = 'to-do-list';
  flag: boolean = true;
  itemValue: string = '';
  listTask: any[] = [];
  todo: ToDo = new ToDo();
  errMessage: string = '';
  noteList: Array<ToDo> = [];

  ngOnInit() {
    console.log('INIT CALLED: ');

    this.htttp.get('http://localhost:3000/todo').subscribe((res) => {
      console.log(res);
    });

    // }, error => {
    //   console.log(error);
    //   this.errMessage = 'Http failure response for http://localhost:3000/todo: 404 Not Found';
    // });
  }

  // storing in db .json from here

  addTask(task: any) {
    this.listTask.push({ tid: this.listTask.length, name: task });
    this.flag = false;
    this.itemValue = '';

    this.service.addToDo(this.todo).subscribe((res) => {
      console.log(res);
    });
  }

  deleteItem(id: any): void {
    if (id == 1) {
      this.listTask.pop();
    } else {
      this.listTask.splice(id, 1);
    }

    if (this.listTask.length == 0) this.flag = true;
    console.log(this.listTask);
  }
}
