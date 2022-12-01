const path = require("path");
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: {
        getalradenspel: "./src/getal-raden-spel/spel.js"
    },
    output: {
        filename: '[name]-bundle.js'
    },
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: {
                    move: [
                        {source: 'dist/getalradenspel-bundle.js', destination: path.resolve(__dirname, 'Public/getal-raden-spel/js/getalradenspel-bundle.js') },
                        {source: 'dist/getalradenspel-bundle.js.map', destination: path.resolve(__dirname, 'Public/getal-raden-spel/js/getalradenspel-bundle.js.map') }
                    ]
                }    
            }
        })
    ],
    devtool: "source-map"
};