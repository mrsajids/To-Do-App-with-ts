import { ToDoTypes } from "../components/ToDoForm";
const SESSIONKEY = "todos";

export const getAllSessionData = () => {
  const data = sessionStorage.getItem(SESSIONKEY);
  return data ? JSON.parse(data) : [];
};

export const setSessionData = (data: ToDoTypes) => {
  const todos = getAllSessionData();
  todos.push(data);
  sessionStorage.setItem(SESSIONKEY, JSON.stringify(todos));
};

export const removeSessionData = (id: number) => {
  let todos = getAllSessionData();
  if (todos.length) {
    todos = todos.filter((item: ToDoTypes) => item.id !== id);
  }
  sessionStorage.setItem(SESSIONKEY, JSON.parse(todos));
};

export const updateSessionData = (id: number, data: ToDoTypes) => {
  let todos = getAllSessionData();
  if (todos.length) {
    todos.map((item: ToDoTypes) => (item.id === id ? data : item));
  }
  sessionStorage.setItem(SESSIONKEY, JSON.parse(todos));
};
