import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ITodo } from '@/types/request.types';

interface LocalDataState {
	localData: ITodo[];
}
const initialState: LocalDataState = { localData: [] };

const localDataSlice = createSlice({
	name: 'localData',
	initialState,
	reducers: {
		setLocalData(state, action: PayloadAction<ITodo[]>) {
			state.localData = action.payload;
		},
		addNewTask(state, action: PayloadAction<ITodo>) {
			state.localData.unshift(action.payload);
		},
		initializeData(state, action: PayloadAction<ITodo[]>) {
			if (state.localData.length === 0) {
				state.localData = action.payload;
			}
		},
		toggleTodoCompletion(state, action: PayloadAction<number>) {
			state.localData = state.localData.map(todo =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo,
			);
		},
		deleteTodo(state, action: PayloadAction<number>) {
			state.localData = state.localData.filter(
				todo => todo.id !== action.payload,
			);
		},
	},
});

export const { actions, reducer } = localDataSlice;
