import pkg from './package.json' with { type: "json" }

let banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * Released under the ${pkg.license} license
 * ${pkg.author}
 */
`;

let formats = ['iife', 'es', 'cjs'];

export default formats.map((format) => {
    return {
        input: 'awesome-numbers.js',
        output: {
            file: `dist/${pkg.name}.${format}.js`,
            format: format,
            banner: banner,
            name: 'AwesomeNumbers'
        }
    }
});