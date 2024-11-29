import { useState, useRef } from "react";
import style from "./App.module.css"

function App() {
  const [task, setTask] = useState([]);
  const add = (text = "") =>
    setTask((datos) => [...datos, { id: Date.now(), text }]);
  const remove = (id) =>
    setTask((datos) => datos.filter((tarea) => tarea.id != id));
  const removeAll = () => setTask([]);
  const input = useRef(null);

  return (
    <>
      <h1 id={style.tittle}>Nuctasks</h1>
      <form id={style.formAdd}>
        <input
          type="text"
          placeholder="¿Qué tarea desea agregar?"
          ref={input}
        />
        <button type="button" onClick={() => add(input.current.value)}>
          Agregar
        </button>
      </form>
      <ul id={style.list}>
        {task.map((tarea) => (
          <li key={tarea.id}>
            <p>{tarea.text}</p>
            <form>
              <button type="button" onClick={() => remove(tarea.id)}>Borrar</button>
            </form>
          </li>
        ))}
      </ul>
      <form id={style.formRemove}>
        <button type="button" onClick={() => removeAll()}>Borrar todas</button>
      </form>
    </>
  );
}

export default App;
