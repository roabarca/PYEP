# Entrega 4 INF-236
## Integrantes
- Daniel Roco
- Roberto Abarca
- Phillipa Paredes
## Archivos a modificar
Se pide modificar el archivo config.json para poder configurar los valores correspondientes a el usuario que probara el codigo (se debe cambiar username y password para que puedan entrar a su base de datos)
## Backup
Se agrega un archivo llamado backup el cual servira para hacer un restore y obtener algunos usuarios ya creados, es importante que al momento de hacer el backup en Postgres tambien se use la opcion "Clean before restore"
## Usuarios creados para el test
Se añadiran los usuarios de forma username;password (tipo)
- user_analista;123 (analista)
- user_cliente;123 (cliente)
- user_de;123 (Desarrollador Externo)
- user_di;123 (Desarrollador Interno)
- user_jp;123 (Jefe de Proyecto)
## Tokens
Para utilizar ciertas funciones se pide que posea el token que se entrega al momento de hacer el login correspondiente, es por esto que se pide que se agrege de forma manual su token y su valor para poder acceder a las distintas funciones
## Inicio
Para iniciar se utiliza dos consolas de modo de correr ambos servidores en simultaneo
- npm start (desde la carpeta backend)
- npm start (desde la carpeta frontend)