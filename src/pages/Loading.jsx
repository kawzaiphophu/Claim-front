import React from 'react';
import '../css/loading.css';

const Loading = () => {
    return (
        <div className="loading-screen">

            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <hr />
            {/* <h1>Loading...</h1> */}
        </div>
    );
};

export default Loading;
