import { apagarTudo } from './../todo.actions';
import { AppState } from './../../app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroAtual: Actions.filtrosValidos = 'Todos';
  filtros: Actions.filtrosValidos[] = ['Todos', 'Pendentes', 'Concluídos'];

  pendentes = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filter').subscribe((element) => {
    //   this.filtroAtual = element;
    // });
    this.store.subscribe((state) => {
      this.filtroAtual = state.filter;
      this.pendentes = state.todos.filter((todo) => !todo.concluido).length;
    });
  }

  alterarFiltro(filtro: Actions.filtrosValidos) {
    this.store.dispatch(Actions.adicionar({ filtro: filtro }));
  }

  clearAll(){
    this.store.dispatch(apagarTudo());
  }
}
