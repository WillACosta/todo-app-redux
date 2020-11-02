import { createReducer, on, State } from '@ngrx/store';

import * as Actions from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [
  new Todo('Estudar JavaScript'),
  new Todo('Levar o cachorro pra passear'),
  new Todo('Comprar Maçãs'),
  new Todo('Lavar Louças'),
];

/**
 * Ao adicionar um novo objeto no array não manipular diretamente
 * usar as reticências para extrair cada um dos registros de maneira indepentende
 * e logo em seguida agrega um novo registro no final do array
 *
 * Evitar uma mutação dos objetos, pois no js são passados por referência
 */
const _todoReducer = createReducer(
  initialState,
  on(Actions.criar, (state, { texto }) => [...state, new Todo(texto)]),
  on(Actions.toggle, (state, { id }) => {
    /**
     * return state[1].concluido; Não usual, pois está alterando o estado manualmente
     * O map irá reetornar um novo array, o que é correto (Sempre deve ser gerado um novo state e ão alterado)
     */
    return state.map((todo) => {
      if (todo.id === id) {
        /**
         * todo.concluido = !todo.concluido;
         * return todo;
         *
         * O JS manipula os objetos por refêrencia. Se alteramos o objeto diretamente
         * O Reducer não funcionará corretamente, pois estaremos editando a instrução na memória,
         * e se perderá o controle do Redux
         */
        return {
          ...todo, //Abstrai todas as demais propiedades
          concluido: !todo.concluido, // Usa-se apenas o concluido
        };
      } else {
        return todo;
      }
    });
  }),
  on(Actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
  //Retornar os registros cujo id não seja o informado
  on(Actions.apagar, (state, { id }) => state.filter((todo) => todo.id != id)),
  on(Actions.toggleAll, (state, { concluido }) => {
    return state.map((todo) => {
      return {
        ...todo,
        concluido: concluido,
      };
    });
  }),
  on(Actions.apagarTudo, (state) => state.filter((todo) => !todo.concluido))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
