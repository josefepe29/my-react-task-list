import { useState, useEffect, useContext } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { DataContext } from "../context/Data";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/Auth";
import { Button } from "@chakra-ui/react";

export const HeaderTask = () => {
  const { addTask } = useContext(DataContext);
  const { register, handleSubmit, formState, reset } = useForm();
  const { user } = useContext(AuthContext);

  const userName = user.name.split(" ")[0];

  // Hook para actualizar la hora
  const [time, setTime] = useState(new Date());

  // Hook para renderizar la hora al montar la página
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Agrega fecha actualizada en tiempo real
  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="profile">
        <span>
          {dateFormat.format(date)} {time.toLocaleTimeString()}
        </span>
        <h1> Hi {userName}😎</h1>
        <span>Let's complete your goals!</span>
      </section>
      <form
        className="add-task"
        onSubmit={handleSubmit((data) => {
          const result = { ...data, status: false };
          // Envia result a
          addTask(result);
          // Reinicia los valores del formulario
          reset();
        })}
      >
        <input
          type="text"
          placeholder="add a task title"
          {...register("title", {
            required: {
              value: true,
              message: "Title is required",
            },
            validate: (value) => {
              return value.length >= 3 || "Title must be at least 3 characters";
            },
          })}
        />
        {formState.errors.title && (
          <span className="error">{formState.errors.title.message}</span>
        )}
        <input
          type="text"
          placeholder="add a task description"
          {...register("description", {
            required: {
              value: false,
            },
          })}
        />
        <button disabled={formState.isValid ? false : true}>
          <BsFillPlusSquareFill />
        </button>
      </form>
    </>
  );
};
