'use client'

import { useState, useEffect } from 'react';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import Loading from '../../../../components/Loading';
import Product from '../../../../components/Product';
import ContentBox5 from '../../../../components/ContentBox5';
import ContentBox6 from '../../../../components/ContentBox6';
import { ProductById } from '../../../api/requests';

export default function Produtos({params}){
    const [loading, setLoading] = useState(true);
    const [produto, setProduto] = useState();

    const fetchProduct = ({ params }) => {
        ProductById(params.produto, (product) => {
          setProduto(product);
          setLoading(false);
        });
    };
    
      useEffect(()=>{
        fetchProduct({ params });
      },[]);

    return(
        loading === true ? (
            <div>
                <Header></Header>
                <Loading></Loading>
                <ContentBox5></ContentBox5>
                <ContentBox6></ContentBox6>
                <Footer></Footer>
            </div>
        )
        :
        (
            <div>
                <Header></Header>
                <Product produto={produto}></Product>
                <ContentBox5></ContentBox5>
                <ContentBox6></ContentBox6>
                <Footer></Footer>
            </div>
        )
    )
}