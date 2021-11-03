import "./Count.css";

export default function Count(props) {
    const arr = props.count;
    const sum = arr.filter((arr) => arr !== "off").length;
    return (<h1>Count: {sum}</h1>);
}