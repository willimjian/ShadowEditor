export default {
    input: 'ShadowEditor.Web/src/gis2/index.js',
    output: {
        indent: '\t',
        format: 'umd',
        name: 'Shadow',
        file: 'ShadowEditor.Web/src/gis2/build/gis2.js'
    },
    treeshake: true,
    external: [],
    plugins: []
};
