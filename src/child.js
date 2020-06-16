import React from 'react';

function MyChild(props){
    return( 
        <div>
            <h3>This is child data.</h3>
            <h4>Name of this child is {props.childname}.</h4>
        </div>
    );
}

export default MyChild;