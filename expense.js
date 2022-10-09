function notifyUser(message){
    const container = document.getElementById('container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<h4>${message}</h4>`;
    container.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
        },2500)
}



     const expense  = document.getElementById('expense')
     expense.addEventListener('submit',(e)=>{
e.preventDefault();
     const amount  = document.getElementById('amount')
     const description  = document.getElementById('description')
     const category  = document.getElementById('category')
     const obj ={
      amount : amount.value,
      description:description.value,
      category:category.value
     }
      amount.value='';
     description.value='';
     category.value='';
     console.log(obj);
     axios.post('http://localhost:3000/addExpense',obj)
     .then(res=>{
         notifyUser(res.data.message)
     })
     .catch(err=>{
         console.log(err)
     })
 
 })
