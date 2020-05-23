import { filtrosValidos } from './../filter/filter.actions';
import { Todo } from './../models/todo.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  /**
   * Retorna os objetos de acordo com o filtro selecionado
   * @param todos
   * @param filter
   */
  transform(todos: Todo[], filter: filtrosValidos): Todo[] {
    switch (filter) {
      case 'Concluídos':
        return todos.filter((todo) => todo.concluido);

      case 'Pendentes':
        return todos.filter((todo) => !todo.concluido);

      default:
        return todos;
    }
  }
}
