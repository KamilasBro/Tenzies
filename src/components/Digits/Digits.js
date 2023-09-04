import "./digits.css"
export default function Digits(props){
    return(
        <div className="digits">
            {props.digits.map(box=>{
            return(
                <div 
                    onClick={()=>props.toggleFreeze(box.id)}
                    key={box.id} 
                    className={
                        box.freeze===true?"freeze":"box"
                    }
                    >
                        {box.digit}
                </div>
             )
            })}
        </div>
    )
}