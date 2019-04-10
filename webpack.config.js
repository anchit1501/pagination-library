const webpack = require('webpack');
module.exports={
devtool:'source-map',
entry:'./src/index.js',
output:{
    path:__dirname+"/dist",
    filename:"bundle.js"
},
module: {
    loaders: [
      {
            test:/\.js$/,
            exclude:/node-modules/,
            loader:"babel-loader"
        }
    ]
},
plugins:[
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV':JSON.stringify('production')
        }
    })    
]
};