import { createAction, props } from '@ngrx/store';

export const criar = createAction(
  '[TODO] Adicionar Tarefa',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Selecionar Tarefa',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar Tarefa',
  props<{ id: number, texto: string }>()
);

export const apagar = createAction(
  '[TODO] Apagar Tarefa',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] Selecionar todas as Tarefas',
  props<{ concluido: boolean }>()
);

export const apagarTudo = createAction(
  '[TODO] Apagar Todas as Tarefas Concluídas'
);