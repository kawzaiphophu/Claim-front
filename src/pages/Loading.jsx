import React from 'react';
import '../css/loading.css';

const Loading = () => {
    return (
        <div className="loading-screen d-flex flex-column m-auto p-auto">
            <img className='d-inline-block' src="https://archives.bulbagarden.net/media/upload/9/9c/Spr_5b_133.png" alt="" />
            <hr />
        </div>
    );
};

export default Loading;
