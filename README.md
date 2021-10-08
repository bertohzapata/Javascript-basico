<div align="center">
  <h1>Curso básico de Javascript</h1>
</div>

<div align="center"> 
  <img src="readme_img/javascript.png" width="250">
</div>

# Introduccion al documento

El contenido de este documenta está basado el curso por  [Diego de Granada](https://github.com/degranda) en  [Platzi](https://platzi.com/clases/basico-javascript/)

# Tabla de contenido
- [Introduccion al documento](#introduccion-al-documento)
- [Tabla de contenido](#tabla-de-contenido)
- [Introducción a Javascript](#introducción-a-javascript)
  - [¿Qué es Javascript](#qué-es-javascript)
  - [¿Por qué Javascript?](#por-qué-javascript)
  
# Introducción a Javascript
## ¿Qué es Javascript
Nace de la necesidad de generar dinamismo ya que la web en sus inicios era muy estática. De esta manera los usuarios y empresas podían interactuar unos con otros.

javascript es: 

- Lenguaje interpretado: El navegador lee linea por linea el código el cual le indica lo que tiene que hacer sin la necesidad de compilar. Todo esto es controlado por el motor de **Javascript V8** incluido en los navegadores.
Cuando el navegador carga nuestro código, el motor V8 traduce las expresiones a código binario mediante la etapa llamda *Just in time compiler*. Primero crea un árbol de keywords, posteriormente interpreta y mejora nuestro código, al final entrega el navegador en Byte Code.
- Orientado a objetos: Toma una abstracción del mundo real para crear objetos dentro del lenguaje
- Débilmente tipado: Permite realizar operaciones entre diferentes tipos de datos.
  ```
  4 + "7"; // 47
  4 * "7"; // 28
  2 + true; // 3
  false - 3; // -3
  ```
- Dinámico: Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código de compilación previa. Esto permite probar nuestro código inmediatamente, pero también es lo que hace que los errores se muestren hasta que se ejecuta el código.

Cuando hablamos de **Fordward** en lenguajes de programación indica que será compatible con versiones futuras y una adición al lenguaje en un programa no causaría que este se rompa si se ejecuta en un motor JS anterior. Javascript no es compatible con versiones futuras.

Javascript es **Backwards Compatible**. Todas las funciones nuevas o módulos nuevos que salgan no van a romper el código ya creado pero no lo puedes utilizar en tu entorno de trabajo al momento de descargarte la nueva versión. Es un proceso que necesita estadarizarse por medio de la **W3C** para generar una versión de Javascript estándar de manera global. Así a pesar de salir una nueva versión, tu puedes traducir todo tu código con herramientas como Babel para estandarizar tu código y evitar que se rompa.



## ¿Por qué Javascript?
A finales del 2019 podías utilizar Javacript como el único lenguaje para darle funcionalidad a tus páginas web dinámicas o aplicaciones web, acompañado de **HTML y CSS**. A finales de este año la W3C decidió estandarizar un nuevo lenguaje llamdado **Web Assembly** el cual rompió la limitante de estas tres tecnologías para crear productos web.

Como punto importante Javascript tiene una basta comunidad de desarrolladores que puede ayudarte a resolver una inmensa cantidad de problemas a la hora de programar.

- Frameworks: existe una basta cantidad de herramientas para desarrollar **aplicaciones web** incluso para crear **aplicaciones móviles nativas e híbridas**.
- Puedes construir **aplicaciones para escritorio** con **Electron**
- También puedes desarrollar del lado del backend con el entorno de ejecución NodeJS para manipular las operaciones del **sistema operativo** así como sistemas de **IoT.**
<br>
<div align="center"> 
  <img src="readme_img/javascript-frameworks.png" height="200">
  <h5>Frameworks de Javascript.</h5>
</div>
<br>