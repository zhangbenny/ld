var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// =======================================
// Load routers, main is inline 
// =======================================
// require('./public/routers/routes.js')(app, express);
app.use(express.static(path.join('public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// =======================================
// Start Server 
// =======================================
var port = process.env.PORT || 8080
app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + port);
});
