import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa: {money} </p>  
            <button onClick={() => setMoney(money + 2000)}>Add 2000 tk more</button>
        </div>
    );
};

export default Brother;