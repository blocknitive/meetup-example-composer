# Ejemplo universidad con composer
Este repo se creó para que las personas que asistieron al meetup o lo vieron por vídeo, puedan probar el código.

# Archivos
Los archivos subidos son los que vimos en el meetup de Blockchain Developers realizado el pasado miércoles 28 de febrero. 
Serían los cuatro archivos que vimos, "universidad.cto" "permissions.acl" "script.js" "queries.qry".

# Instalación
Para cargar los archivos, podremos hacerlo de dos maneras:

  - Vía https://hyperledger.github.io/composer/  -> "Try it online"  
    -> "Deploy a new business network"  
    -> Solo cambiaremos el nombre del proyecto por "universidad-network"
    -> Seleccionar "empty business network"
    -> Pulsar "Deploy"
    Nos conectaremos a nuestra red de negocio y crearemos los ficheros  "universidad.cto",  "script.js" y "queries.qry"
    El fichero "permissions.acl" ya estará creado con lo que solo habrá que sustituir el contenido por el que he subido al repo.
    
  - Vía Composer instalado en local
    -> Al crear la red de negocio, lo haremos con el namespace "org.blocknitive.universidad"
    -> Solo tendremos que incluir el fichero "queries.qry" y el resto de ficheros sustituirlos por los que están en este repo.
