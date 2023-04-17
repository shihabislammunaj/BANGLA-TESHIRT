import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children,hasFrend,ring}) => {
    return (
        <div>
            <h2>Cousin </h2>
            <p><small>{children}</small></p>
       {  hasFrend &&  <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;