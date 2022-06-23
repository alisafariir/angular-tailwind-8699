/** @type {import('tailwindcss').Config} */
module.exports = {
  // If I add both paths in the content field, all classes will be recognized and their style will be added. But this means that if my user who uses my library only uses the text-box component in his project, the output of the css file has both a button style and a text-box if the button component is only in the second path, and Not in the user project, also if I delete the second path, if it uses text-box the text-box style will no longer be rendered because tailwind does not recognize the classes inside this tag.
  content: [
    "./projects/showcase/**/*.{html,js}",
   // "./projects/mylib/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
