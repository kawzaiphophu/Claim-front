import React from 'react';
import '../css/loading.css';

const Loading = () => {
    return (
        <div className="loading-screen d-flex flex-column">

            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
                
            </div>
            <img className='d-inline-block' src="https://archives.bulbagarden.net/media/upload/9/9c/Spr_5b_133.png" alt="" />
            <hr />
        </div>
    );
};

export default Loading;
