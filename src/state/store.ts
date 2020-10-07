import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { tasksSlice, TasksState } from '@state/slices';

export interface ApplicationState {
  tasks: TasksState;
}

const rootReducer = combineReducers<ApplicationState>({
  tasks: tasksSlice.reducer,
});

// @ts-ignore
export const store = configureStore<ApplicationState>({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    // logger,
  ],
});
