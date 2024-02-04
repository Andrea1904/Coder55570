import { Router } from "express";
import { generateProduct,generateUser } from "../utils/mock.utils.js";

const router = Router()

router.get('/prd', (req,res)=>{
    const totalProductos =3
    const products= Array.from({ length: totalProductos}, ()=>generateProduct());
    res.json({ success: true , payload: products})
    
})

router.get('/', (req,res)=>{
    const totalUsers=3
    const users= Array.from({ length: totalUsers}, ()=>generateUser());
    res.json({ success: true , payload: users})
    
})

export default router