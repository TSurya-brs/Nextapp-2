import { z } from 'zod';
import {create} from 'zustand';

interface Form{
    userName:string;
    password:string;
    updateName:(userName:string)=>void;
    updatePassword:(password:string)=>void;
}

export const loginSchema=z.object({
  userName:z.string().min(5),
  password:z.string().min(4)
})

export const useStore = create <Form>((set)=>({
    userName:"",
    password:"",
    updateName:(userName)=>set({userName}),
    updatePassword:(password)=>set({password}),
}))




      // TO-DO

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


export const todoSchema = z.object({
  title: z.string(),
  completed: z.boolean().optional(),
});


interface TodoStore {
  todos: Todo[];
  updatedTitles: { [key: number]: string };  
  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Omit<Todo, 'id'>) => void;
  updateTodo: (id: number, updatedData: Partial<Todo>) => void;
  deleteTodo: (id: number) => void;
  toggleCompletion: (id: number) => void;
  setUpdatedTitle: (id: number, title: string) => void;  
}

export const useStore2 = create<TodoStore>((set) => ({
  todos: [],
  updatedTitles: {},

  setTodos: (todos) => set({ todos }),

  
  addTodo: (todo) => {
    const result = todoSchema.safeParse(todo);
    if (result.success) {
      set((state) => ({
        todos: [...state.todos, { ...todo, id: Date.now() }],
      }));
    } else {
      console.error('Invalid todo:', result.error.errors); 
    }
  },

  
  updateTodo: (id, updatedData) => {
    const result = todoSchema.safeParse(updatedData);
    if (result.success) {
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedData } : todo
        ),
      }));
    } else {
      console.error('Invalid todo update:', result.error.errors);
    }
  },

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  toggleCompletion: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },

  setUpdatedTitle: (id, title) => {
    set((state) => ({
      updatedTitles: { ...state.updatedTitles, [id]: title },
    }));
  },
}));



        //Tables

export interface TableData{
  userID:number,
  userName:string,
  email:string,
  phoneNo:string,
}

interface Datastore{
  userData:TableData[],
  setuserData:(data:TableData[])=>void,
}


export const useStore3 = create <Datastore>((set)=>({
  userData:[],
  setuserData:(data:TableData[])=>set({userData:data})
}))


