const sd = (script, description = ``) =>
  description ? { script, description } : { script }

module.exports = {
  scripts: {
    /*
    autotest: {
      ...sd(
        `nps -c ./package-scripts.cjs autotest.rebuild test`,
        `rebuild and test autotests`,
      ),
      rebuild: sd(
        `drgen -i ${[`./kiddo.js`].join(
          ` `,
        )} -o autotests --processor doctor-general-jest`,
        `generate tests with \`doctor-general\`!`,
      ),
    },
    */
    clean: sd(`rm -r dist`, `clean the build!`),
    lint: sd(`eslint --fix .`, `lint!`),
    test: {
      ...sd("vitest --run", "run tests!"),
      watch: sd("vitest", "run tests in watch mode!"),
    },
  },
}
