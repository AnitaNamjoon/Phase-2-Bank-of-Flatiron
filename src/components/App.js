import REACT from "react";
import BankTransactionContainer from "./BankTransaction";

function App() {
    return(
        <div className="ui raised segment">
        <div className="ui segment violet inverted">
         <h2>The Royal Bank of Flatiron</h2>
         </div>   
         <BankTransaction />
        </div>
    )
}
export default App;
