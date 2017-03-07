demo的总体架构:
1)功能:增删改查
2)后台使用thinkPhp
3)node做中间层,使用koa2

用到的中间件:
1)koa-staitc 设置静态资源
2)koa-simple-router 路由
3)koa-swig 模板解析
4)request 发送请求的
5)错误处理 自定义的中间件
6)koa-connect 能是express koa1 koa2的中间件连起来(这个没用到)
7)koa-convert koa1 转换器 (这个没用到)
