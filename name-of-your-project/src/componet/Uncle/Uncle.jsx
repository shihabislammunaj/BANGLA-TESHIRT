import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';
 

const Uncle = () => {
    const [money,setMoney]=useContext(MoneyContext);
    return (
        <div>
         <h2>Uncle</h2>
         <p>
            <smail>
                grandpa money :{money}
                <button onClick={()=>setMoney(money+1000)}>Send 1000TK</button>
            </smail>
         </p>
         <section className='flex'>
            <Cusin>Nabil</Cusin>
            <Cusin>Nabila</Cusin>
         </section>
         </div>
    );
};

export default Uncle;