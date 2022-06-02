import React from 'react';

const Box = (props) => {
    return (
        <div className='bg-white p-8 pb-12  w-[90%] md:w-[70%] mx-auto'>
            {props.children}
        </div>
    );
};

export default Box;