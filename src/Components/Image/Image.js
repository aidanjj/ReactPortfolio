import React from 'react';

function Image(props){
const img = props.pathName;
    return (
        <img src={require({img})} alt='' className='image'/>
    );
}
export default Image;