import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext('gold'); // context er starting word o boro haat er lekha hoy (PascalCase)

export const MoneyContext = createContext(1000);

const asset = 'diamond';

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * For using context api
 * 1. Create a context & export it
 * 2. Add provider for the context with a value. value could be anything(string,function,array,object so on...)
 * 3. useContext to access value in the context api
 */