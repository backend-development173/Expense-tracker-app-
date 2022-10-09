const Expense = require('../models/expense')

exports.addExpense=(req, res,)=>{
    const {amount,description,category}=req.body;
    if(amount == undefined || amount.length === 0 ) return  res.status(401).json({sucess:false ,message:'please  add amount'})
 Expense.create({
       amount: amount,
       description :description,
       category :category
    })
    .then(()=>{
        res.status(201).json({success:true,message:'expense added successfully'})
    })
    .catch(err=>{
        console.log(err)
        res.status(403).json({success:false,message:'expense not added'})

    })
}