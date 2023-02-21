import "./styles.scss"
import Teste from "../../../assets/carousel-1.jpg"


export default function ServicesCard({type, text, img}) {
    return (
        <div className="mb-5 serviceCard" style={{backgroundImage: `url(${img})`}}>
            <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
            </div>

            <h1>{type}</h1>
            <p>
                {text}
            </p>
        </div>
    )
}