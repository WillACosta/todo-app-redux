import { filtrosValidos } from './../../filter/filter.actions';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  filterActual: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('todos').subscribe((element) => {
    //   this.todos = element;
    // });

    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filterActual = state.filter;
    });
  }
}
