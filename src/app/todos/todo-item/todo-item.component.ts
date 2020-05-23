import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

import * as Actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('Input') txtInputFisico: ElementRef;

  chkConcluido: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkConcluido = new FormControl(this.todo.concluido);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkConcluido.valueChanges.subscribe((valor) => {
      this.store.dispatch(Actions.toggle({ id: this.todo.id }));
    });
  }

  /**
   * Manipular o elemento do componente com o view child
   */
  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  finalizarEdicao() {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
      Actions.editar({
        id: this.todo.id,
        texto: this.txtInput.value,
      })
    );
  }

  apagar() {
    this.store.dispatch(Actions.apagar({ id: this.todo.id }));
  }
}
