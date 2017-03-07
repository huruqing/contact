const koa = require('koa');
const app = new koa();
const render = require('koa-swig');
const co = require('co');
const config = require('./conf/config.js');
const serv = require('koa-static');
const path = require('path');
const koaBody   = require('koa-body');

app.use(serv(config.get('publicDir')));
//app.use(serv(path.join(__dirname, '..', 'public')));
app.use(koaBody({formidable:{uploadDir: __dirname}}));
const initController = require('./controller/initController.js');
initController.getAllController(app);
app.context.render = co.wrap(render({
    root: config.get('viewsDir'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}))

app.listen(config.get('port'), () => {
    console.log('server started at locahost:8080');
})
