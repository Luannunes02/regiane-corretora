import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

import RegianePhoto from "../../assets/regiane.jpeg"
import Logo from "../../assets/logo.png"
import Carousel1 from "../../assets/carousel-1.jpg"
import Carousel2 from "../../assets/carousel-2.jpg"
import Carousel3 from "../../assets/carousel-3.jpg"
import GivingHome from "../../assets/giving-home.jpg"
import WhatsAppLogo from "../../assets/whatsapp.png"
import InstagramLogo from "../../assets/instagram.png"
import EmailLogo from "../../assets/email.png"
import IntroductionImg from "../../assets/introducao.jpg"

import DefaultButton from "../../components/common/DefaultButton";
import ServicesCard from "../../components/common/ServicesCard";
import Card from "../../components/common/Card"
import ImoveisCardButton from "../../components/common/imoveisCardButton";

import ImoveisAPI from "../../api/imoveis.json"

const imoveis = ImoveisAPI.imoveis;

export default function Home() {
    return (
        <main>
            <section id="introduction">
                <div className="container">
                    <div className="row">
                        <div className="text-container col col-lg-5" data-aos="zoom-out-right" data-aos-duration="1000">
                            <h1 className="display-4">
                                O IMÓVEL IDEAL DO JEITO QUE VOCE DESEJA!
                            </h1>
                            <h4 className="">
                                CASAS DE ALTO PADRÃO, POPULARES E APARTAMENTOS NA REGIÃO DO CARIRI - CE
                            </h4>
                            <a href="#imoveisContainer">
                                <DefaultButton content="VER IMÓVEIS" className="mt-3" />
                            </a>
                        </div>
                        <div className="introductionImg-container mt-4 col-lg-7" data-aos="zoom-out-left" data-aos-duration="1000">
                            <img src={IntroductionImg} alt="IntroduçãoImg" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="about" className="pb-5">
                <div className="container">
                    <div className="row title-div">
                        <h1 className="display-3 text-center mt-5" data-aos="fade-up" data-aos-duration="1000">SOBRE MIM</h1>
                    </div>
                    <div className="row mt-6">
                        <div className="col col-lg-6 mt-5" >
                            <img className="regiane-photo" src={RegianePhoto} alt="giving-house" data-aos="fade-up" data-aos-duration="1600" />
                        </div>
                        <div className="col col-lg-6 textIntroductionContainer" >
                            <h1 className="display-3" data-aos="fade-up" data-aos-duration="1300"><span>Regiane Nunes,</span><br /> Corretora de imóveis</h1>
                            <h3 className="mt-4 pt-3" data-aos="fade-up" data-aos-duration="1000">Com mais de 6 anos de experiência no mercado imobiliário, sou uma corretora altamente capacitada e dedicada a oferecer aos meus clientes um atendimento personalizado e eficiente. Com conhecimento aprofundado do setor e uma paixão pelo que faço, trabalho incansavelmente para garantir que cada negociação seja bem-sucedida e satisfatória para todas as partes envolvidas. Se você está procurando uma corretora confiável e comprometida, eu sou a escolha certa para ajudá-lo a alcançar seus objetivos imobiliários.  </h3>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services" >
                <div className="container mb-5 services-buy-and-sell">
                    <div>
                        <h1 className="text-center display-4 mt-5 mb-0 pb-0" data-aos="fade-up" data-aos-duration="1000">SOBRE OS SERVIÇOS</h1>
                        <h3 className="text-center mt-0 pt-0" data-aos="fade-up" data-aos-duration="1200">QUE OFEREÇO</h3>
                    </div>
                    <div>
                        <h4 className="display-6" data-aos="fade-up-right" data-aos-duration="800">Compra e venda de:</h4>
                        <div className="servicesDetailsContainer row mb-5" data-aos="fade-up" data-aos-duration="1400">
                            <ServicesCard text="Compra e venda de casas: alto padrão e popular. Atendimento personalizado e eficiente. " type="Casa" img="https://user-images.githubusercontent.com/116287208/219228360-450f40b0-1f58-419d-a339-b84a7deb6060.jpg" />
                            <ServicesCard text="Compre ou venda seu apartamento no Cariri-CE. Consulte-me." type="Apartamento" img="https://user-images.githubusercontent.com/116287208/219228366-44bdca7a-4948-4a46-93eb-9e8b406e6e63.jpg" />
                            <ServicesCard text="Compre ou venda seu lote com eficiência. Consulte-me." type="Lote" img="https://user-images.githubusercontent.com/116287208/219228377-a1e676d8-0fd2-4848-8e9e-779df89ec822.jpg" />
                            <ServicesCard text="Compre ou venda seu ponto comercial com sucesso. Consulte-me." type="Comercio" img="https://user-images.githubusercontent.com/116287208/219228384-7111d596-57fa-4473-bdba-c65e795985ac.jpg" />
                        </div>
                    </div>
                </div>

                <div className="paralax">
                    <div className="container" data-aos="zoom-in-right" data-aos-duration="1000">
                        <h1 >
                            Minha Missão é transformar sonhos de família em realidade,
                            oferecendo imóveis de qualidade, com preço justo e com a qualidade que nossos clientes buscam. Solidificando assim o sonho de todo brasileiro de ter o Imóvel Próprio.
                        </h1>
                    </div>
                </div>

                <div className="serviceDetailContainer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6 mt-4" data-aos="flip-left" data-aos-duration="1000">
                                <img src={GivingHome} alt='giving-home-img' />
                            </div>
                            <div className="col col-lg-6" data-aos="fade-up" data-aos-duration="1400">
                                <p className="fs-6">
                                    Como corretora de imóveis com 6 anos de experiência no mercado imobiliário na região do Cariri - CE, posso afirmar que meu trabalho consiste em oferecer aos meus clientes um serviço completo e personalizado, garantindo segurança e eficiência em todas as transações.
                                    <br />
                                    Tenho um amplo conhecimento da região e acesso a um vasto portfólio de imóveis, incluindo casas, apartamentos, lotes e pontos comerciais.
                                    <br />
                                    Estou sempre em busca de soluções criativas e inovadoras para atender às necessidades dos meus clientes, buscando garantir sua satisfação e tranquilidade em todas as etapas do processo. Com meu trabalho como corretora competente, posso assegurar que a compra e venda de imóveis se torna uma experiência tranquila e segura.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="imoveisContainer">
                <div className="container">
                    <h1 className="pt-5 mb-5" data-aos="fade-up" data-aos-duration="1000">PORTFÓLIO DE IMÓVEIS:</h1>
                    <div className="imoveis-wrap">
                        {imoveis.map((imovel) => {
                            return (
                                <Card
                                    key={imovel.id}
                                    id={imovel.id}
                                    title={imovel.title}
                                    vacancy={imovel.vacancy}
                                    adress={imovel.adress}
                                    rooms={imovel.rooms}
                                    space={imovel.space}
                                    value={imovel.value}
                                    cover={imovel.cover}
                                    description={imovel.description}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

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


        </main>
    )
}