# Pasos para ejecutarlo

Levantar base de datos MySQL o MariaDB

### Información de la base de datos
- `host: "localhost"`
- `ususario: "root"`
- `password: ""`
- `base de datos: "medico"`

Levantar servidor MySQL en local y acceder por terminal. Estando dentro de MySQL o MariaDB ejecutar el siguiente comando: `CREATE DATABASE medico;`

Una vez hecho eso acceda a la carpeta del proyecto y ejecute `npm install` una vez concluido ejecute `node server`

El acceso al servidor en local es: [http://localhost:8080/](http://localhost:8080)

Existen 3 usuarios 1 es Administrador y los otros dos son usuarios basicos

##### Usuario administrador
- `email: "admin@medicos.com"`
- `contraseña: "clavedeadmin"`

##### Usuario común 1
- `email: "user1@usuarios.com"`
- `contraseña: "clavedeusuario1"`

##### Usuario común 2
- `email: "user2@usuarios.com"`
- `contraseña: "clavedeusuario2"`