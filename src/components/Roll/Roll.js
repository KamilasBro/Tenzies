export default function Roll(props){
    return(
        <div className="btn-wrap">
            {props.win===false?
            <button onClick={props.roll}>Roll</button>
            :<button onClick={props.reset}>Reset</button>}
    </div>
    )
}