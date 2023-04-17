/**
 * Gulp tasks config:
 *
 */
const config = {
  project: {
    root: "./",
    src: "./src",
    dist: "./",
  },
  css: {
    src: "./assets/css/*.css",
    dest: "./assets/css",
    outputName: "wf-register-form",
  },
  sass: {
    root: "./assets/sass",
    src: "./assets/sass/*.scss",
    dest: "./assetts/css",
  },
  js: {
    src: "./src/js/*.js",
    dest: "./dist/js",
    outputName: "theme-scripts",
  },
  images: {
    src: "./src/images",
    dest: "./images",
  },
};
module.exports = config;
