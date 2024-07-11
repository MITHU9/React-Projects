import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  let expenses = [
    {
      id: 1,
      date: new Date(2024, 4, 15),
      title: "Groceries",
      amount: 123.45,
    },
    {
      id: 2,
      date: new Date(2024, 5, 10),
      title: "House Rent",
      amount: 1999.99,
    },
    {
      id: 3,
      date: new Date(2024, 3, 12),
      title: "Car Payment",
      amount: 456.78,
    },
    {
      id: 4,
      date: new Date(2024, 7, 18),
      title: "Phone Bill",
      amount: 234.56,
    },
  ];
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
