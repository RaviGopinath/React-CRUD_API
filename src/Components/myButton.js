import React from 'react';

function MyButton(props){
    function displayForm(){
        props.clickEventHandler(true);
    }

    return <button className="btn btn-success mt-3" style={{ marginRight : 10}} onClick={displayForm}>{props.children}</button>

}

export default MyButton