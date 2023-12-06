import { useContext, useState } from "react";
import { AppContext } from "../contextApp";

export const useRequestUpdateTodos = () => {
  const [isUpdating, setIsUpadating] = useState(false);
  const {fetchTodos} = useContext(AppContext);

  const requestUpdateTodos = (id, newText) => {
    setIsUpadating(true);
    fetch(`http://localhost:3000/Tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: newText,
      })
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Задача изменена, ответ от сервера', response)
        fetchTodos();
        console.log(fetchTodos())
      })
      .finally(() => setIsUpadating(false))
  };
return {
    isUpdating,
    requestUpdateTodos,
}
}