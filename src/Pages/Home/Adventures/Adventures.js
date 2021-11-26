import React from 'react';

import mechanic1 from '../../../images/mechanic/a2.jpg';
import mechanic2 from '../../../images/mechanic/a1.jpg'
import mechanic3 from '../../../images/mechanic/a3.jpg'
import mechanic4 from '../../../images/mechanic/a4.jpg'
import mechanic5 from '../../../images/mechanic/a5.jpg'
import mechanic6 from '../../../images/mechanic/a1.jpg'
import Adventure from '../Adventure/Adventure';

const adventures = [
    {
        img: mechanic1,
        name: 'Dr. Andrew Smith',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
    {
        img: mechanic2,
        name: 'Dr. John Anderson',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
    {
        img: mechanic3,
        name: 'Dr. Zakaria Smith',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
    {
        img: mechanic4,
        name: 'Dr. Sakib Anderson',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
    {
        img: mechanic5,
        name: 'Dr. Sakib Anderson',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
    {
        img: mechanic6,
        name: 'Dr. Sakib Anderson',
        expertize: 'Consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque. Maecenas semper erat et justo porta auctor nec.'
    },
]

const Adventures = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Choose Adventure</h2>
            <br />
            <div className="row">
                {
                    adventures.map(adventure => <Adventure
                        key={adventure.name}
                        adventure={adventure}
                    >

                    </Adventure>)
                }
            </div>
        </div>
    );
};

export default Adventures;