import { useState } from "react";
import { data } from "./db/data";
import { Card, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Avatar } from "./components/ui/avatar";
import "./globals.css";


const App = () => {
  const [todos, setTodos] = useState(data);
  return (
    <>
      <div className="m-4">
        <h1 className="text-center font-sans font-bold text-2xl text-slate-700">Shadcn ui</h1>
      </div>
      <div className="grid grid-cols-3 gap-8 todo">
        {todos.map((todo) => (
          <Card key={todo.id}>
            <CardHeader>
              <div>
                <CardTitle>{todo.title}</CardTitle>
              </div>
            </CardHeader>
            <CardFooter>
              <p>{todo.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default App;
