import { Todo } from './models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
  todos: Todo[];
  filter: filtrosValidos;
}

/**
 * Mapeia todos os reducers que a aplicação utiliza
 * e importa a constante no App Modules
 */
export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
