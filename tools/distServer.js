import browserSync from 'browser-sync'; // eslint-disable-line import/no-extraneous-dependencies
import historyApiFallback from 'connect-history-api-fallback'; // eslint-disable-line import/no-extraneous-dependencies
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: 'dist',
  },
  files: [
    'src/*.html',
  ],
  middleware: [historyApiFallback()],
});
