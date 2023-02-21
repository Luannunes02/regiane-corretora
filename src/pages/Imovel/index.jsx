import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./imovel.scss";

import WhatsAppLogo from "../../assets/whatsapp.png"
import InstagramLogo from "../../assets/instagram.png"
import EmailLogo from "../../assets/email.png"
import FamilyPhoto from "../../assets/family.png"
import Room from "../../assets/quarto.png";
import Vacancy from "../../assets/carro.png"
import Space from "../../assets/espaco.png"

import ImoveisCardButton from "../../components/common/imoveisCardButton";

import ImovelApi from "../../api/imoveis.json";
import DefaultButton from "../../components/common/DefaultButton";

export default function Imovel() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { id } = useParams();
    const imovel = ImovelApi.imoveis[id];

    return (
        <div className="mb-5">

            <div className="container mt-1">
                <div className="imovelContainer">
                    <section className="container" id="carousel" >
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner imgsCarouselContainer" data-aos="zoom-out-left" data-aos-duration="1000">
                                <div className="carousel-item active">
                                    <img src={imovel.cover} className="d-block w-100 imgCarousel" alt="..." />
                                </div>
                                {imovel.imgs.map((img) => {
                                    return (
                                        <div key={img} className="carousel-item">
                                            <img src={img} className="d-block w-100 imgCarousel" alt={imovel.name} />
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="carousel-control-prev btnCarousel" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next btnCarousel" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </section>
                    <h1 className="mt-3 mb-0">{imovel.title}</h1>
                    <h2 className="value mt-0" >Por apenas <span>R$ {imovel.value}</span></h2>
                    <div className="characteristicsHouse">
                        {imovel.rooms === 0 ?
                            <div></div>
                            :
                            <div className="item d-flex px-4" >
                                <img src={Room} alt="Quartos" />
                                <p>{imovel.rooms} Quartos</p>
                            </div>
                        }
                        <div className="item d-flex px-4">
                            <img src={Space} alt="SpaceOfHouse" />
                            <p>{imovel.space} de espaço</p>
                        </div>
                        {imovel.rooms === 0 ?
                            <div></div>
                            :
                            <div className="item d-flex px-4">
                                <img src={Vacancy} alt="Quartos" />
                                <p>{imovel.vacancy} Vagas</p>
                            </div>
                        }
                    </div>
                    <div className="row mt-3 aboutImovelContainer" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col col-12">
                            <h3 className="mb-2">Descrição:</h3>
                            <ul className="descriptionUl">
                                {imovel.description.map((item) => {
                                    return (
                                        <li key={item}>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="justify-content-md-center d-flex justify-content-center text-center align-center">
                            <div className="col col-lg-5 ">
                                <a href="https://api.whatsapp.com/send?phone=+55(88) 98877-9576&text=Olá Regiane Nunes, tudo bem? Desejo comprar um imóvel.">
                                    <DefaultButton content={"Entre em contato comigo"} className="mt-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="familyDream">
                <div className="container mb-5 pb-5">
                    <h1 className="mt-5 text-center display-4 familyDreamTitle" data-aos="fade-up" data-aos-duration="1000">JÁ AJUDEI DIVERSAS FAMILIAS A ACHAREM O SEU IMÓVEL TÃO SONHADO COM EXCELÊNCIA E EFICIÊNCIA</h1>
                    <div className="row mt-5">
                        <div className="col col-lg-5" data-aos="fade-up" data-aos-duration="1000">
                            <img src={FamilyPhoto} alt="FamilyPhoto" />
                        </div>
                        <div className="col col-lg-7" data-aos="fade-up" data-aos-duration="1500">
                            <h4 className="fs-5">Como corretora de imóveis com seis anos de experiência, já tive a oportunidade de ajudar muitas famílias a conquistarem o sonho do próprio imóvel. Ao longo desses anos, adquiri uma grande habilidade em entender as necessidades e desejos de cada cliente, e encontrar o imóvel ideal para eles. Com dedicação e eficiência, conduzo todo o processo de compra e venda, desde a apresentação das opções até a negociação dos valores, buscando sempre a melhor solução para o cliente.</h4>
                            <h4 className="fs-5">Cada família que ajudei a realizar o sonho do próprio imóvel tinha uma história única e particular. Alguns estavam em busca de um espaço maior para acomodar a família, outros queriam um imóvel com uma localização estratégica, e alguns buscavam uma opção mais acessível financeiramente. Em todos os casos, utilizei minha expertise para entender as necessidades e encontrar opções que se adequassem ao perfil de cada cliente. Com um atendimento personalizado e eficiente, contribuí para que essas famílias realizassem o sonho de ter um lar próprio.</h4>
                        </div>
                    </div>
                </div>
            </div>

            <section id="contact">
                <div className="container">
                    <div className="row text-center d-flex justify-content-center">
                        <div className="col col-lg-6" data-aos="flip-left" data-aos-duration="1500">
                            <h2 className="mt-5">Entre em contato comigo</h2>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=+55(88) 98877-9576&text=Olá Regiane Nunes, tudo bem? Desejo comprar um imóvel.">
                                <div className="midiaContainer">
                                    <img src={WhatsAppLogo} alt="whatsapplogo" />
                                    <p>(88) 98877-9576</p>
                                </div>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/regianenunescorretora/">
                                <div className="midiaContainer">
                                    <img src={InstagramLogo} alt="instagramLogo" />
                                    <p>@regianenunescorretora</p>
                                </div>
                            </a>
                            <a target="_blank" href="mailto:regiane-nunes76@hotmail.com?Body=Ol%E1%Regiane%20Nunes%2C%20tudo%20bem%3F%0A%0AProcura%20a%20loca%E7%E3o/compra%20de%20um%20im%F3vel.">
                                <div className="midiaContainer">
                                    <img src={EmailLogo} alt="EmailLogo" />
                                    <p>regiane-nunes76@hotmail.com</p>
                                </div>
                            </a>
                            <div className="mt-3 d-flex justify-content-center ">
                                <h5 className="px-2 pb-2">CRECI: 17.214</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}