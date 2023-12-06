import { useContext, useState } from "react";
import { AppContext } from "../contextApp";

export const useRequestDeletingTodos = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const {fetchTodos} = useContext(AppContext);

  const requestDeletingTodos = (id) => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/Tasks/${id}`, {
      method: 'DELETE',
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Задача УДАЛЕНА, ответ от сервера', response)
        fetchTodos()
      })
      .finally(() => setIsDeleting(false))
  };
return {
    isDeleting,
    requestDeletingTodos,
}
}