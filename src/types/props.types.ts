import { CSSProperties, Dispatch, SetStateAction } from 'react';

import { ITodo } from './request.types';

export interface ILayout {
	style?: CSSProperties;
}

export interface IContent {
	data: ITodo[];
	targetTask?: ITodo;
	isTodo?: string | undefined;
}
export interface ITodoProps {
	todo: ITodo;
	onClick: (todo: ITodo) => void;
	deleted: (todo: ITodo) => void;
}

export interface ITaskDetail {
	targetTask?: ITodo;
}

export interface IDataContext {
	localData: ITodo[];
	setLocalData: Dispatch<SetStateAction<ITodo[]>>;
}

export interface IAllTodo {
	data: ITodo[];
}
