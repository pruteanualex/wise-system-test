const path = require('path');

module.exports = {
    entry:{
        bundle:['./public/js/main.js']
     },
    output:{
      path:path.resolve(__dirname,'public'),
      filename: 'js/[name].js'  
    },
    mode: 'development',
    devServer:{
        contentBase:'./public'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
 }