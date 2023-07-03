Primero se tiene que crear un archivo .env con las variables KEYWORD cuyo valor deber ser bearer, PORT cuyo valor debe ser un número de puerto válido y SECRET cuyo valor debe ser una clave segura que se le asigne. Luego se deben ejecutar las rutas en el orden que se muestran abajo.

## ROUTES

`POST /api/user`

Añade un nuevo usuario.

---

`GET /api/user`

Devuelve todos los usuarios.

---

`POST /api/login`

Verifica que el usuario exista y genera un token.

---

`POST /api/library`

Añade una nueva librería.

---

`GET /api/library`

Devuelve todas las librerías.

---

`GET /api/library/{id}`

Devuelve los datos de una librería por id.

---

`PUT /api/library/{id}`

Actualiza los datos de una librería.

---
 
 `DELETE /api/library/{id}`

Elimina una librería de manera lógica.

---

`POST /api/book`

Añade un nuevo libro.

---

`GET /api/book`

Devuelve todos los libros.

---

`GET /api/book/{id}`

Devuelve los datos de una libro por id.

---

`PUT /api/book/{id}`

Actualiza los datos de un libro.

---
 
 `DELETE /api/book/{id}`

Elimina un libro de manera lógica.

  





