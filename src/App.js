import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {   id: 'e2', 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) 
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'Pen',
        amount: 12.5,
        date: new Date(2023, 3, 12),
    },
    {
        id: 'e6',
        title: 'Netflix',
        amount: 450,
        date: new Date(2023, 5, 12),
    },
    {
        id: 'e7',
        title: 'Amazon Prime',
        amount: 250,
        date: new Date(2023, 6, 1),
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const onAddExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={onAddExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App;
