import './styles.css'

export function Card({name, time}:any){
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time} </small>
        </div>
    )
}