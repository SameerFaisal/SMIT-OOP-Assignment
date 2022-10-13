
class PersonAccount{
constructor(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
}
    income= [{
        description: 'Salary',
        amount: 4000,
      
    },
    {
        description: 'Bonus',
        amount: 200,
        

    },
    {
        description: 'Stocks',
        amount: 300,
        
    }
];
expenses= [{
        description: 'Mortgage',
        amount: 700,

    },
    {
        description: 'Transport',
        amount: 100,
        
    },
    {
        description: 'Daycare',
        amount: 165,
       

    }
];
totalincome(){
    let totalIncome=0;
    for(let i=0;i<this.income.length;i++){
totalIncome+=this.income[i].amount;

    }
    let text=document.getElementById("content");
    text.innerHTML="The total income is: "+totalIncome;
}
totalexpense(){
    let totalExpense=0;
    for(let i=0;i<this.expenses.length;i++){
totalExpense+=this.expenses[i].amount;

    }
    let text=document.getElementById("content");
    text.innerHTML="The total expenses are: "+totalExpense;
}
addExpense() {
            let expenses = this.expenses;
    let description=prompt("Area of Expense: ")
    let amount=parseInt(prompt("Enter amount: "))
            expenses.push({description: description,
        amount: amount})
        alert(`${description} added with ${amount}`);

}
addIncome() {
    let income = this.income;
    let description=prompt("Source of Income: ")
    let amount=parseInt(prompt("Enter amount: "))
    income.push({description: description,
        amount:amount})
    alert(`${description} added with ${amount}`);
}
    accountBalance(){
        let totalExpense=0;
        for(let i=0;i<this.expenses.length;i++){
    totalExpense+=this.expenses[i].amount;
        }
    let totalIncome=0;
    for(let i=0;i<this.income.length;i++){
totalIncome+=this.income[i].amount;
    }
let balance=totalIncome-totalExpense;
let text=document.getElementById("content");
    text.innerHTML=`Current Account Balance is: ${balance}`;
    }}

const person=new PersonAccount("Sameer","Faisal")    