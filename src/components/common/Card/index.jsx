import React from "react";
import "./card.scss"
import { Link } from "react-router-dom";
import ImoveisCardButton from "../imoveisCardButton";


export default function Card({ id, value, adress,rooms, vacancy, space, title, apName, cover, description }) {

    return (
        <div className="cardContainer text-center" data-aos="zoom-in-up" data-aos-duration="1000">
            <Link to={`/imovel/${id}`}>
                <h3 className="mt-0 pt-1">{title}</h3>
                <div className="d-flex justify-content-center">
                    <div className="imgContainer">
                        <img src={cover} alt={title} />
                    </div>
                </div>


                <h4 className="mt-3 value">Por Apenas <span>R$ {value}</span></h4>
                <h5>Sobre o imóvel:</h5>
                <ul>
                    <li>Possui {rooms} quartos</li>
                    <li>Um espaço de {space}</li>
                    <li>Possui {vacancy} vagas para carro</li>
                </ul>

                <h5 className="mt-3">Fica localizado na:</h5>
                <ul>
                    <li>{adress}</li>
                </ul>

                <ImoveisCardButton content='SAIBA MAIS' className="mt-4 mb-3" />

            </Link>
        </div>

    )
}