

// const buttons = document.querySelectorAll('.form__btn');
const balanceInfo = document.querySelector('.balanceInfo');
const budgetAmount = document.querySelector('.form__input--amount');
const budgetButton = document.querySelector('.form__btn--budget');
const inputBudgetField = document.querySelector('.operation--enter-budget');
const budgetfield = document.querySelector('.budget--total');
const expenseDescription = document.querySelector('.form__input--description');
const expenseAmount = document.querySelector('.form__input--expense');
const movements = document.querySelector('.movements');
const sortButton = document.querySelector('.btn--sort');
const addExpenseBtn = document.querySelector('.form__btn--expense');

let toggler = 0;
// console.log(buttons)

// buttons.forEach(btn=>{
//     btn.addEventListener('click',function(e){
//         e.preventDefault();
//     }) 
// })

// addEventListener('click',function(e){
//     e.preventDefault()
// })




let budget;
// const renderBudget = (number) => 
// `<div class="balance">
//     <div>
//         <p class="balance__label">Start balance</p>
//     </div>
//     <p class="balance__value"><span class="budget--total">${number}</span></p>
// </div>`

// addExpenseBtn.addEventListener('click',function(e){
//     e.preventDefault();

//     if(e.target == budgetButton && budgetAmount.value){
//         console.log('💩')
//         budget = +budgetAmount.value;
//         const markup = renderBudget(budgetAmount.value)
//         console.log()
//         console.log(markup)
//         operationBudget.insertAdjacentHTML('beforebegin',markup)
//         operationBudget.classList.add('hidden')
//     }

//     else{
//         const description = expenseDescription.value;
//         const value = expenseAmount.value ;
//         console.log(description,value)
//         const markup = 
//         `<div class="movements__row">
//            <div class="movements__type movements__type--expense">Expense</div>
//            <div class="movements__description">${description}</div>
//            <div class="movements__value">-${value}</div>
//          </div>`

//         movements.insertAdjacentHTML('beforeend',markup)
//     }

    
// })


class App{
    #startingBalance;
    #expenses = [];
    constructor(){
        budgetButton.addEventListener('click',this._addBudget.bind(this));
        addExpenseBtn.addEventListener('click',this._addExpense.bind(this));
    }

    _addBudget(e){
        e.preventDefault();
        const budget =+budgetAmount.value;
        if(budget>0){
            this.#startingBalance = budget;
            this._renderBudget(budget);

        }
        else{
            alert(`The starting balance needs to be greater than 0`)
            budgetAmount.value ='';
            return false;
        }
    }

    _addExpense(e){
        e.preventDefault();
        console.log('i')
        // if(!this.#startingBalance) {
        //     alert('Enter a starting budget')
        //     return;
        // }
        const description = expenseDescription.value;
        const amount  = +expenseAmount.value;
        if(this._checkExpenseDetail(description,amount) ==false){
            console.log('logging from here')
            return};
        console.log(this.#expenses);
        console.log(description,amount);
        this.#expenses.push({description:description,amount:amount})
        console.log(this.#expenses)
        //+expenseAmount.value
    }

    _checkExpenseDetail(description,amount){
        if(this.#startingBalance- amount<0){
            alert('The balance cannot be lower then 0')
            return false;
        }

        if(!description){
            alert('The description cannot be empty')
            return false;
        }

        if(!amount){
            alert('The amount cannot be empty')
            return false;
        }

    }

    _renderExpense(){
        
    }

    _renderBudget(number){
        balanceInfo.style.display = 'flex';
        budgetfield.innerHTML = number;
        inputBudgetField.style.display = 'none'
    }
    
}

const app = new App();