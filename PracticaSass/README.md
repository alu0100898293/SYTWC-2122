# Práctica Introductoria de Sass
---
## Ejercicios introductorios
Los ejercicios introductorios de Sass se ecnuentran en la correspondiente carpeta [Ejercicios](https://github.com/alu0100898293/SYTWC-2122/tree/main/PracticaSass/Ejercicios). En su interior podemos hallar seis archivos .scss que corresponden cada unos a los mencionados ejercicios enumerados del dos al siete y, como se puede suponer, cada archivo es la respuesta al ejercio cuyo nombre hace referencia.

## Landing page
Siguiendo la estructura marcada, se ha creado una landing con la temática de una empresa de alquiler de coches, empleando para sus estilos diferentes archivos .scss, según se indica en el guiónpropuesto para su desarrollo.

Los ficheros .scss se encuentra en la carpeta correspondiente [scss](https://github.com/alu0100898293/SYTWC-2122/tree/main/PracticaSass/src/styles/scss) dentro del directorio src. Para su transpilación en css, se ha definido un script dentro del archivo _package.json_, que se puede ejecutar de la siguiente forma:
```sh
npm run sass
```
Para comprobar visualmente el resultado de la landing page, se ha creado específicamente una rama denominada _gh-pages_ para definir este directorio como raíz, para desplegar la página mediante gh-pages. Puede observar el resultado [aquí](https://alu0100898293.github.io/SYTWC-2122/).

## Automatización de tareas
Para la automatización de las tareas se ha empleado _gulp_, definiendo dos tareas mediante los módulos _browser-sync_, _gulp-minify-css_ y _gulp-sourcemaps_. Puede ejecutar estas tareas medientes los comandos: 
```sh
gulp browser-sync
gulp styles
```
El primero de ellos despliega un servidor para comprobar los cambiar llevados en la hoja de estilos de la página.
El segundo minifica los archivos css y muestra la ruta completa de los archivos fuente de los estilos, tras lo cual pasa estos archivos al flujo del servidor.