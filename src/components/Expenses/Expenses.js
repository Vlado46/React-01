import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [expensesYear, setExpensesYear] = useState("2022");
  const expenseFilterHandler = (selectedYear) => {
    setExpensesYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          startingYear={expensesYear}
          onFilterChange={expenseFilterHandler}
        />
        {props.expenseItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
export default Expenses;
