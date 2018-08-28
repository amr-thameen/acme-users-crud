module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
   module: {
     rules: [
       {
         test: /\.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/
       }
     ]
   }
 };