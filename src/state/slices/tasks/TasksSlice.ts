import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import uuid from 'react-native-uuid';

export interface Task {
  uuid: string;
  done: boolean;
  text: string;
  favorite: boolean;
}

export interface TasksState {
  list: Task[];
}

export const INITIAL_STATE_NOTIFICATIONS: TasksState = {
  list: [
    { uuid: uuid.v4(), text: 'WC Schoonmaken', favorite: false, done: true },
    { uuid: uuid.v4(), text: 'NLJug opzeggen', favorite: true, done: false },
  ],
};

// export const updateNotificationsForRenewal = createAsyncThunk(
//   'notifications/updateNotificationsForRenewal',
//   async (renewal: Renewal, { dispatch, getState }): Promise<Renewal> => {
//     dispatch(removeNotificationsForRenewal(renewal));
//     dispatch(addNotificationsForRenewal(renewal));
//     return renewal;
//   },
// );

export const addTaskAsynchronous = createAsyncThunk(
  'tasks/addTaskAsynchronous',
  async (task: Task, { dispatch }): Promise<Task> => {
    dispatch(addTask(task));
    return task;
  },
);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: INITIAL_STATE_NOTIFICATIONS,
  reducers: {
    addTask: (state: TasksState, action: PayloadAction<Task>) => {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
    toggleTaskDone: (state: TasksState, action: PayloadAction<string>) => {
      return {
        ...state,
        list: state.list.map((task) => {
          if (task.uuid !== action.payload) {
            return task;
          }
          return {
            ...task,
            done: !task.done,
          };
        }),
      };
    },
  },
  extraReducers: (builder) => {
    // The `builder` callback form is used here because it provides correctly typed reducers from the action creators
    builder.addCase(addTaskAsynchronous.pending, (state, action) => {});
  },
});

export const { addTask, toggleTaskDone } = tasksSlice.actions;
