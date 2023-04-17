import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money]=useContext(MoneyContext)
    return (
        <div>
            <h2>Siter</h2>
            <p><small>Grandpa Monely :{money}</small></p>
        </div>
    );
};

export default Sister;