import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  output: {
    distPath: {
      root: 'build',
    },
    assetPrefix: './',
  },
  html: {
    template: './public/index.html',
    templateParameters: {
      PUBLIC_URL: '.',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
});
