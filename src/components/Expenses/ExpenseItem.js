import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [newTitle, setNewTitle] = useState(""); // Added state to update title dynamically...
  // const [title, setTitle] = useState(props.title);
  // const changeTitle = () => {
  //   setTitle(newTitle);
  // };
  // const changeInputValue = (event) => {
  //console.log(event.target);
  //   setNewTitle(event.target.value);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {/* <input type="text" value={newTitle} onChange={changeInputValue} />
      <button onClick={changeTitle}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
