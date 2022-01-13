<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Prácritica avanzada de Gatsby
</h1>

## Detalles

1.  **Gatsby**

    Práctica donde se ha creado un componente para mostrar información de varios eventos. Los datos de los eventos son leídos mediante un plugin desde un archivo json ubicado en la carpeta _src/data/_.
    Como en otras prácticas, para ejecutarse se debe ejecutar el siguiente comando:

    ```shell
    npm run develop
    ```

    Tras esto la página se encontrará en http://localhost:8000.

2.  **Accesibilidad**

    Mediante el uso de los plugins _eslint_, _eslint-plugin-react_ y _eslint-plugin-jsx-a11y_ y los sets de reglas recomendados por estos, se han llevado a cabo las modificaciones pertinentes para satisfacer los requisitos de accesibilidad.
  
    Pueden comprobarse el cumplimiento de las reglas mencionadas mediante el comando:

    ```shell
    npm run eslint
    ```


3.  **Plugins**

    Los plugin empleados son entre otros:
    - gatsby-source-filesystem
    - gatsby-transformer-json
    - gatsby-plugin-eslint
    - eslint-plugin-jsx-a11y
