import React from 'react';

import mechanic1 from '../../../images/mechanic/t2.jpg';
import mechanic2 from '../../../images/mechanic/t3.jpg'
import mechanic3 from '../../../images/mechanic/t4.jpg'
import mechanic4 from '../../../images/mechanic/t3.jpg'
import mechanic5 from '../../../images/mechanic/t2.jpg'
import mechanic6 from '../../../images/mechanic/t1.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
    {
        img: mechanic5,
        name: 'Sakib Anderson',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
    {
        img: mechanic6,
        name: 'Sakib Anderson',
        expertize: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
    },
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Tour Guides</h2>
            <br />
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;