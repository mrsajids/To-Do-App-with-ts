import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/Layout";
import "antd/dist/reset.css";
import ToDoProvider from "./context/toDoContext";

function App() {
  return (
    <BrowserRouter>
      <ToDoProvider>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                {" "}
                <Home />
              </DefaultLayout>
            }
          >
            {/* <Route path="/home" element={ } /> */}
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </ToDoProvider>
    </BrowserRouter>
  );
}

export default App;
