import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setIsLoading(false);
          setTodos(data);
        }, 2000);
      });
  }, []);
  console.log(todos, isLoading);

  if (isLoading)
    return (
      <>
        <h1>Tunggu sebentar...</h1>
      </>
    );

  return (
    <>
      <div>
        <p>Anda Mengklik sebanyak {count} times</p>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
      <div>
        <h3>List :</h3>
        {todos.map((e, index) => {
          return (
            <div key={index}>
              <h4>{e.id}</h4>
              <h4>{e.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
