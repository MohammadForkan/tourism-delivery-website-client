import React from 'react';

const Adventure = ({ adventure }) => {
    const { name, img, expertize } = adventure;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <br /><br />
            <img src={img} alt="" />
            <br /><br />
            {/* <h3>{name}</h3> */}
            <br />
            <p className="text-black"><b>{expertize}</b></p>
            <button className="btn btn-danger w-50">See More</button>
        </div>
    );
};

export default Adventure;