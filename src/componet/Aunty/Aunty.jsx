import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
           <section className='flex'>
            <Cusin>Abir</Cusin>
            <Cusin hasFrend={true} ring={ring}>nibar</Cusin>
           </section>
        </div>
    );
};

export default Aunty;