# Elena Bravo personal website

## ![App Preview](https://i.imgur.com/p99uxBs.png)

## Stack

This website was built with [Remix](https://remix.run/) using my [component library](https://github.com/elenabravo/typescript-react-atomic-starter) and the following technologies:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [GSAP](https://greensock.com/gsap/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)

---

## Server

- [Spotify web api node](https://github.com/thelinmichael/spotify-web-api-node) was used to generate tracks and artists data.
- In order to create these files a [Spotify authentication token](https://developer.spotify.com/documentation/general/guides/authorization/) must be provided.
- Run `npm run set:data` to start the server and generate the data or `npm run set:data:watch` to do it in watch mode.

---

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

---

## Netlify CI/CD

This website is hosted on [Netlify](https://www.netlify.com/), taking advantage of automatic builds and instantaneously-published deploys.
[Go to website](http://elenabravo.com/)

---

## To do

- Add tests
- Add accesibility support for animations
- Improve performance
