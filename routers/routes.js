const router=require('express').Router()
const {login,register}=require('../controllers/controller')

router.post("/Login",login)

router.post("register",register)
//post:Veri gönderme  get:veri alma    put:veri güncelleme   patch:veri güncelleme 
//delete:veri silme 
module.exports=router