module.export = {
  entry: __dirname + '/src/js',
  module:{
    loader:[{
        test: /\.js$/,
        include: __dirname + '/src/js',
        loader: 'babel'
    }]
  },
  output :{
    path:'./dist',
    filename: 'bundle.js'
  }
};