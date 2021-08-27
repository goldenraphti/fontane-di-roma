<h1 align="center">
  Fontane di Roma
</h1>

A _"Border Less Border Line"_ project

## 💫 Concept

Fontane di Roma is a porject mixing short stories, photography and cartography.
It aims to be responsive of course. In a documentary-philosophy.


## 🚀 Quick start

1.  **Deploy locally**

    Clone this repo on your machine

    ```sh
    # clone the repository locally
    git clone https://github.com/goldenraphti/fontane-di-roma.git
    ```

    ```sh
    # install node modules
    yarn install
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## MVP Roadmap

- [x] on the map, move the z-index text copyright at the bottom center behind the stories modal
- [x] add the logo with tagline instead of the photo for the ugly 404
- [ ] photos from index link to their story opened in the map
- [x] photos from the photos page link to their story in the map page
- [ ] stories load on page-load with story ID or when navigate from a photo clicked, but does not yet set new story ID when click another modal, it doesn't modify the pathname in URL
- [ ] previews of stories in the map have text that gets cropped above the photo, + the link below is blue (do we want that?)
- [ ] lorem ipsum text is all over, it should automatically check that if it starts with lorem ipsum then only show the photo, hide the text (in both the photo preview and the story expanded)
- [ ] it should have an editor-setting deciding if there will be any stories inside. If set to false then provide an alternative display of the website where there would be:
- no buttons to "stories"
- no texts in map
- no text in preview
- [x] improve the photo page, the header is super ugly (is it also used on the other pages such as about, contact, etc?)
- [ ] on map page give a logo to get back to index page (and buttons to go to the photos & story pages if they exist and are displayed?), or a hamburger menu to list them
- [ ] make hamburger menu for mobile
- [ ] write other pages (about, contact, 404)


## Wishlist Roadmap

- [ ] update/upgrade packages
- [ ] critical E2E testing