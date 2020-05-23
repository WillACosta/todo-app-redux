import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'Todos' | 'Concluídos' | 'Pendentes';

export const adicionar = createAction(
  '[FILTER] Adicionar Filtro',
  props<{ filtro: filtrosValidos }>()
);

export const alterar = createAction(
  '[FILTER] Alterar Filtro',
  props<{ filtro: filtrosValidos }>()
);
