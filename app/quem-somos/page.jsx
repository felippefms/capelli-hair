'use client'

import Header from "../../components/Header";
import ContentBox3 from "../../components/ContentBox3";
import ContentBox8 from "../../components/ContentBox8";
import ContentBox9 from "../../components/ContentBox9";
import Localização from "../../components/Localizacao";
import ContentBox5 from "../../components/ContentBox5";
import ContentBox2 from "../../components/ContentBox2";
import ContentBox6 from "../../components/ContentBox6";
import Footer from "../../components/Footer";
import WhatsappButton from "../../components/WhatsappButton";

export default function QuemSomos(){
    return(
        <div>
            <WhatsappButton></WhatsappButton>
            <Header></Header>
            <ContentBox8></ContentBox8>
            <ContentBox9></ContentBox9>
            <ContentBox3></ContentBox3>
            <Localização></Localização>
            <ContentBox5></ContentBox5>
            <ContentBox2></ContentBox2>
            <ContentBox6></ContentBox6>
            <Footer></Footer>
        </div>
    )
}