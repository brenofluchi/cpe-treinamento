import React from "react";
import Depoimentos from "../../Components/Depoimentos";
import "./Historia.css";

const depoimentos = [
    {
        id: 1,
        title: "Breno, 21: Vancouver",
        description: "''Precisando melhorar meu inglês, e, visando meu futuro profissional, comecei uma busca por agências que me proporcionassem mais segurança na viagem, então veio a escolha da Volare, que, com muita atenção, cuidou de todos os detalhes dessa experiência incrível.''",
        foto: "/images/avatar/ph_breno.png",
    },
    {
        id:2,
        title: "Lampinho, 24: Paris",
        description: "''Foi a França o cenário da minha mais belle époque como estudante de Relações Internacionais. Condensadas em apenas seis meses vivi lá algumas das experiências mais incríveis e doces da minha vida, principalmente na Cidade Luz, Paris''",
        foto: "/images/avatar/ph_lampinho.png",
    },
    {
        id:3,
        title: "Lucas, 21: Malta",
        description: "''O clima é maravilhoso, até quente demais! A integração que a Volare oferece é ótima. A ilha tem um preço justo em tudo, transporte é bom, mas complicado dependendo do horário! Malta é um lugar super seguro. É um mundo à parte e que vale a pena ser visto e vivido!''",
        foto: "/images/avatar/ph_lucas.png",
    },
    {
        id:4,
        title: "Pedro, 20: Brighton",
        description: "''O intercâmbio em Brighton é diversão garantida. Para quem quer fugir dos eternos chuviscos londrinos, uma boa notícia: o clima em Brighton é agradável e quase sempre ensolarado. As temperaturas, no entanto, não sobem tanto – até mesmo no verão, quando as máximas ficam em torno dos 23, 24°C.''",
        foto: "/images/avatar/ph_pedro.png",
    },
    {
        id:5,
        title: "Vinícius, 22: Nova York",
        description: "''A Volare me ajudou a realizar o sonho de viver em Nova York, e, além disso, durante um ano, fui aluno de suas escolas parceiras e aprimorei ao máximo o meu nível de inglês. Estou muito satisfeito com a experiência, e recomendo a empresa com toda certeza.''",
        foto: "/images/avatar/ph_vinicius.png",
    },
    {
        id:6,
        title: "Bruna, 20: Madri",
        description: "''Passei um mês na Espanha, em especial, em Alcalá de Henares, Madri. Fiquei impressionada com o choque cultural, com as pequenas ruelas da cidade e os lindos prédios históricos. Quando voltei ao Brasil, percebi a evolução do meu Espanhol. Fiquei impressionada com a melhora da fala, da audição e da escrita.''", 
        foto: "/images/avatar/ph_bruna.png",
    },
]

function Historia(){
    return(
        <div className = "nossaHist">
            <div className = "texto">
                <div className = "titulo1">
                    <img src = "/images/avatar/hist.png" alt = "mundo" width = "250" height = "250"></img>
                    <div className = "separa">
                        <h1><b><font color = "#ffb703">NOSSA HISTÓRIA</font></b></h1>
                    </div>
                </div>
                <p><b>A história da Volare começou há 16 anos em Belo Horizonte e, desde então, a empresa tornou-se referência no mercado fornecendo aos nossos intercambistas o que apenas nós mesmos podemos oferecer: <font color = "#ffb703">profissionalismo</font>, <font color = "#ffb703">fidelidade</font> e <font color = "#ffb703">excelência</font></b></p>
                <div className = "valores">
                        <img src = "/images/avatar/prof.png" alt = "profissionalismo" width = "118" height = "118"></img>
                        <div className = "ajustes1">
                            <img src = "/images/avatar/cliente.png" alt = "cliente" width = "120" height = "120"></img>
                        </div>
                        <img src = "/images/avatar/excelencia.png" alt = "excelencia" width = "150" height = "150"></img>
                </div>
                <p><b>Na constante busca pelos nossos objetivos, a nossa vitoriosa história é comprovada por quem nos acompanhou de perto ao longo desses 16 anos, nos <font color = "#ffb703">depoimentos</font> de alguns dos nossos ex-alunos: </b></p>
            </div>
            <div className = "depoContainer">
                {depoimentos.map((depoimentos) => (<Depoimentos key = {depoimentos.id} depoimentos = {depoimentos}/>))}
            </div>
            <div className = "textoFinal">
                <p><b>VENHA<font color = "#ffb703"> VOCÊ</font> TAMBÉM FAZER PARTE DESSA HISTÓRIA!</b></p>
            </div>
        </div>
    )
}

export default Historia;