const express=require('express')

const router=express.Router()

// 注册新用户
router.post('/reguser',(req,res)=>{
  res.send(
    'reguser is ok'
  )
})

// 登录

router.post('/login',(req,res)=>{
  res.send('login is ok')
})

// 将路由对象共享出去
modules.exports=router