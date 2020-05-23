import { createReducer, on, State } from '@ngrx/store';

import * as Actions from './filter.actions';

export const initialState: Actions.filtrosValidos = 'Todos';

const _filterReducer = createReducer(
  initialState,
  on(Actions.adicionar, (state, { filtro }) => filtro),

);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
