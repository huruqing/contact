const app = require('../app.js');
const request = require('supertest');
describe('新增用户', function() {
  it('返回的code应该是666', function(done) {
    request(app.listen())
      .get('/addUser?username=huruqing&age=100&addr=gx')
      //.set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err){} return done(err);
				if (res.body.code == 666) {
					done();
				} else {
					done('接口测试没通过');
				}
      });
  });
});
