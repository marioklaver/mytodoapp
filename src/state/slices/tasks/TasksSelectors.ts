// Selectors
import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '@state';
import { Task } from '@state/slices';

export const tasksStateSelector = (state: ApplicationState) => state.tasks;

export const tasksListSelector = createSelector(tasksStateSelector, (state) => state.list);

export const tasksListTodoSelector = createSelector(tasksListSelector, (list: Task[]) =>
  list.filter((item) => !item.done),
);

export const tasksListDoneSelector = createSelector(tasksListSelector, (list: Task[]) =>
  list.filter((item) => item.done),
);
