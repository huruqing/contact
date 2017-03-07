const request = require('supertest');
const koa = require('koa');
const app = new koa();
app.use(ctx=>ctx.body='hello')
app.listen(8080);
describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app.listen())
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
				if (err) return done(err);
				done();
				// if (res.body.code == 666) {
				// 	done();
				// } else {
				// 	console.log('返回的code不是666');
				// };
      });
  });
});
