const dotenv=require('dotenv')
dotenv.config()
const express=require('express')

const path=require('path')
const bodyParser=require('body-parser')

const sequelize=require('./util/database')

const User=require('./models/user')
const Expense=require('./models/expense')
const cors=require('cors')

const authRoutes=require('./routes/auth')
const expenseroutes = require('./routes/expense')

const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

User.hasMany(Expense);
Expense.belongsTo(User);

app.use('/user',authRoutes);
app.use(expenseroutes);



sequelize.sync({force :false})
.then(()=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})



