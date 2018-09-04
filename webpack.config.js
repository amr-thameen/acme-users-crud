module.exports = {
  entry: ['babel-polyfill', './src/App.js'],
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