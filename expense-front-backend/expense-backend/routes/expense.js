const express=require('express')

const expenseController=require('../controllers/expense')



const router=express.Router()

router.post('/addExpense',expenseController.addExpense)










module.exports=router