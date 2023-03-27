import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    const filteredExpenses = props.item.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    
    let expenseContent = <p>No Expense found ...!</p>
    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map(
            (expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
        )
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {/* {filteredExpenses.length < 1 ? <p>No Expenses found..!</p> :
                filteredExpenses.map(
                    (expense) =>
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
            } */}
            {/* {filteredExpenses.length < 1 && <p>No Expenses found..!</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map(
                (expense) =>
                    <ExpenseItem   
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            } */}
            {expenseContent}
        </Card>

    );
};

export default Expenses;