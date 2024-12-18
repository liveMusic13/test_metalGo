import { ITodo } from '@/types/request.types';

import { $axios } from '@/api';

export const todoService = {
	todos: async (): Promise<{ data: ITodo[] }> => await $axios.get('/todos'),
};
