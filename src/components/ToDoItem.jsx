import React from "react";

function ToDoItem(props){

    

    function deletethisItem(){
        const indx = props.id;
        const fun = props.onCheck;
        fun(indx);
    }

    return (<li onClick = {deletethisItem} > {props.itemName} </li>);
}

export default ToDoItem;