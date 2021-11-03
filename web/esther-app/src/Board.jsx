import React from "react";
import { useSelector } from "react-redux";
import Square from "./Square";
import './Board.css'
import Count from "./Count";

export default function Board() {
    const counterState = useSelector((state) => state.counter)
    const boardComponent = [];
    for (let i = 0; i < counterState.length; i++) {
        boardComponent.push((<Square counter = {counterState[i]} index = {i}/>));
    }
    return (
        <div className = 'container'>
            <Count count = {counterState}/>
            {boardComponent}
        </div>
    );
}