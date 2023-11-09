'use client'

import Header from "../../../components/Header";
import ContentBox5 from "../../../components/ContentBox5";
import ContentBox6 from "../../../components/ContentBox6";
import Footer from "../../../components/Footer";

export default function Categoria({params}){
    
    console.log({params});
    return(
        <div>
            <Header></Header>
            <p>{params.categoria}</p>
            <ContentBox5></ContentBox5>
            <ContentBox6></ContentBox6>
            <Footer></Footer>
        </div>
    )
}