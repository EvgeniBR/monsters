import React from 'react'


const CardList = (props) =>{
    console.log(props);
    return (
        <div>
        {props.children}
        </div>
    )
}
export default CardList;