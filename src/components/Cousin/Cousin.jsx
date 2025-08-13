import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";
import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            {
                (asset && <p>Has: {asset}</p>)
            }
            {
                name === 'Mohona' && <p>Also has: {gift}</p>
            }
            {
                name ==='tanjina'  && <Friend></Friend>
            }


        </div>
    );
};

export default Cousin;