const request = require('request');
class indexModel {
    constructor() {}
    index() {
        return new Promise(function(resolve, reject) {
            request.post({
                url: 'http://localhost/contactPhp/index.php/home/index/getList',
                formData: {}
            }, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    reject('查询列表失败');
                } else {
                  resolve(body);
                }
            });
        })
    }
    addUser(postData) {
      return new Promise(function(resolve, reject) {
          request.post({
              url: 'http://localhost/contactPhp/index.php/home/index/addUser',
              formData: postData
          }, function optionalCallback(err, httpResponse, body) {
              if (err) {
                  // reject(new Error('查询列表失败'));
                  console.log('失败');
                  throw new Error('查询列表失败');
              } else {
                resolve(body);
              }
          });
      })
    }
    delUser(postData) {
      return new Promise(function(resolve, reject) {
          request.post({
              url: 'http://localhost/contactPhp/index.php/home/index/delUser',
              formData: postData
          }, function optionalCallback(err, httpResponse, body) {
              if (err) {
                  // reject(new Error('查询列表失败'));
                  console.log('失败');
                  throw new Error('删除用户失败');
              } else {
                resolve(body);
              }
          });
      })
    }
    saveUser() {
        return new Promise(function(suc, fail) {
            setTimeout(function functionName() {
                suc('saveUser');
            }, 2000)
        })
    }
}
module.exports = indexModel;
