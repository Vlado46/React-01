import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [expensesYear, setExpensesYear] = useState("2022");
  const expenseFilterHandler = (selectedYear) => {
    setExpensesYear(selectedYear);
  };

  const filteredExpenses = props.expenseItems.filter((expense) => {
    return expense.date.getFullYear().toString() === expensesYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expensesYear}
          onFilterChange={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
