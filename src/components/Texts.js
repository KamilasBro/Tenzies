export default function Texts(props){
    return(
        <div className="texts">
            <h1>{props.win===true
            ?
            `Congratulations, You won in ${props.counter} rolls!`
            :
            "Tenzies"}</h1>
            <div>
                <p>
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
                </p>
            </div>
        </div>
    )
}