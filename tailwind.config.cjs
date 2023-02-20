/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cat-green': "#a6e3a1",
        'base': '#1e1e2e',
        'cat-purple': '#cba6f7',
      }
    }
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: 'false',
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: 'mocha'
    }),
  ],
};