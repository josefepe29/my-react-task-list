# Implementar Hooks

Hola Jose, ahora que aprendiste a usar los hooks, puedes incluirlos en tu proyecto integrador.

En tu aplicación my-react-task-list, implementa el hook useState para controlar el listado de tareas.
Cada tarea debe contar con:

- [x] Agregar Tareas: Implementa una función que permita agregar tareas al listado. Cada tarea debe tener un título, descripción y un estado de completada o pendiente. Utiliza valores booleanos para el estado.
- [x] Eliminar Tareas: Implementa una función que permita eliminar una tarea.
- [x] Editar Tareas: Implementa una función que permita modificar el título y descripción de una tarea existente.

Debes almacenar las tareas y su estado en localStorage cada vez que una tarea sea agregada, eliminada o editada. Revisa la documentación de localStorage para recordar cómo escribir y leer valores.
Usa el hook useEffect para cargar el listado de tareas desde localStorage cuando la aplicación se inicie. De esta manera, el usuario podrá ver sus tareas incluso si cierra y vuelve a abrir la aplicación o si recarga la página.
