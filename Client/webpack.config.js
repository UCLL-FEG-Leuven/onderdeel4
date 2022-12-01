const path = require("path");
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: {
        "getal-raden-spel": "./src/getal-raden-spel/spel.js"
    },
    output: {
        filename: '[name]-bundle.js'
    },
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    move: [
                        {source: 'dist/getal-raden-spel-bundle.js', destination: path.resolve(__dirname, 'Public/getal-raden-spel/js/getal-raden-spel-bundle.js') },
                        {source: 'dist/getal-raden-spel-bundle.js.map', destination: path.resolve(__dirname, 'Public/getal-raden-spel/js/getal-raden-spel-bundle.js.map') }
                    ]
                }    
            }
        })
    ],
    devtool: "source-map"
};