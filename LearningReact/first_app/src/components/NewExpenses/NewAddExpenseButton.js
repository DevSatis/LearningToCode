import React from 'react';
import ExpenseForm from "./ExpenseForm";

const NewAddExpenseButton = (props) =>{
    const [isShown, setIsShown] = useState(false);
    
    const onClickHandler = event => {
        setIsShown(current => !current);
    }
    
    return (
        <div>
            <button onClick={onClickHandler}>Add New Expense</button>
            {isShown && <ExpenseForm />}
        </div>
    );
}

export default NewAddExpenseButton;