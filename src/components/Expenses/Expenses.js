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
        <ExpenseItem
          title={props.expenseItems[0].title}
          amount={props.expenseItems[0].amount}
          date={props.expenseItems[0].date}
        />
        <ExpenseItem
          title={props.expenseItems[1].title}
          amount={props.expenseItems[1].amount}
          date={props.expenseItems[1].date}
        />
        <ExpenseItem
          title={props.expenseItems[2].title}
          amount={props.expenseItems[2].amount}
          date={props.expenseItems[2].date}
        />
        <ExpenseItem
          title={props.expenseItems[3].title}
          amount={props.expenseItems[3].amount}
          date={props.expenseItems[3].date}
        />
      </Card>
    </div>
  );
}
export default Expenses;
