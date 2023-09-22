import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import languageData from './assets/lang/es';

console.log(resolve(__dirname, 'assets', 'partials'))

export default {
  plugins: [
    handlebars({
      context: languageData,
      partialDirectory: resolve(__dirname, 'assets', 'partials'),
      helpers: {
        isEven: (number) => Number(number) % 2 == 0,
        hasItem: (array, item) => array.includes(item)
      },
    }),
  ],
};