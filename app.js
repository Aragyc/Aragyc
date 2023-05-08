// 导入项目
const express=require('express')

const app=express()
// 导入使用路由
const userRouter=require('./router_handler/user')
app.use('/api',userRouter)
//导入配置跨域请求
const  cors=require('cors')
app.use(cors)

// 配置解析表单数据的中间件
app.use(express.urlencoded({extends:false}))

// 启动服务器
app.listen(3007,function(){
  console.log('Server running at https://127.0.0.1:3007');
})