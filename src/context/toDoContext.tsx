import { createContext, useState } from "react";
import React from "react";
import { ToDoTypes } from "../components/ToDoForm";
export type ToDoContextType = {
  toDo: ToDoTypes | undefined;
  setToDo: React.Dispatch<React.SetStateAction<ToDoTypes | undefined>>;
};

export const toDoContext = createContext<ToDoContextType | null>(null);

const ToDoProvider = ({ children }: any) => {
  const [toDo, setToDo] = useState<ToDoTypes>();
  return (
    <toDoContext.Provider value={{ toDo, setToDo }}>
      {children}
    </toDoContext.Provider>
  );
};

export default ToDoProvider;
