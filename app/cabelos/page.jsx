'use client'

import Header from '../../components/Header';
import WhatsappButton from '../../components/WhatsappButton';
import ContentBox10 from '../../components/ContentBox10';
import ProductsCategoriesList from '../../components/ProductsCategoriesList';
import ContentBox6 from '../../components/ContentBox6';
import Footer from '../../components/Footer';

export default function Cabelos(){
    return(
        <div>
            <WhatsappButton></WhatsappButton>
            <Header></Header>
            <ContentBox10></ContentBox10>
            <ProductsCategoriesList></ProductsCategoriesList>
            <ContentBox6></ContentBox6>
            <Footer></Footer>
        </div>
    )
}