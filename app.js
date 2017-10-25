import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import http from 'http';
import mongoose from 'mongoose';
import mongooseConnect from './connection_db/mongoose.connect';
import fs from 'fs';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.set('port', process.env.PORT || 8888);
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

mongooseConnect('mongodb://localhost/loja-pc');
fs.readdirSync(__dirname + '/models').forEach(function(filename) {
  if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});

routes(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('post'));
})

export default app;
