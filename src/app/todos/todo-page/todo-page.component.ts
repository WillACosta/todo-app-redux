import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as Actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  concluido: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.concluido = !this.concluido;
    this.store.dispatch(Actions.toggleAll({ concluido: this.concluido }));
  }
}
