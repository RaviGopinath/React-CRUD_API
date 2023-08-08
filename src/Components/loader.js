import React from "react";

function Loader(){
    return (
        <div class="spinner-border text-center" style={{width: '3rem', height: '3rem'}} role="status">
             <span class="visually-hidden">Loading...</span>
        </div>

    )
}

export default Loader