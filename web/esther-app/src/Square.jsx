import { useDispatch } from "react-redux";
import './Square.css';

export default function Square(props) {
    const status = props.counter;
    let background = "white";
    if(status === "on") {
        background = 'black';
    } else {
        background = 'white';
    }
    const dispatch = useDispatch();
    return (<div id = "square" className = {background} onClick = {() => dispatch(
        {
        type: 'boardClick',
        need: props.index,
        }
    )}></div>);
}