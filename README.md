## Elena Bravo personal website

[Launch website](http://elenabravo.com/) 🚀

### Stack
Website was developed using [webpack5-pug-sass-starter](https://github.com/elenabravo/webpack5-pug-sass-starter) as a boilerplate.
It includes the following features:

- Webpack 5
- Sass
- Pug
- PostCSS
- Babel
- JS and CSS minification
- Browsersync for live reload


### Server

- [Spotify web api node](https://github.com/thelinmichael/spotify-web-api-node) was used to generate tracks and artists data.
- In order to create these files a [Spotify authentication token](https://developer.spotify.com/documentation/general/guides/authorization/) must be provided.
- Run `npm run set:data` to start the server and generate the data or `npm run set:data:watch` to do it in watch mode.


### Run on localhost

- Run `npm run start` to start the development server. This will open the site in localhost:3000.
- Run `npm run build` to create a production build. This will build the output under the `dist` folder by default.
