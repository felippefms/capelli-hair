'use client'

import { useState, useEffect } from 'react';
import { useAppStore } from '../../../../store/AppStore';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import LoadingComponent from '../../../../components/LoadingComponent';
import Product from '../../../../components/Product';
import ContentBox5 from '../../../../components/ContentBox5';
import ContentBox6 from '../../../../components/ContentBox6';
import { ProductById } from '../../../api/requests';

export default function Produtos({params}){
    const Loading = useAppStore((state) => state.Loading)
    const setLoading = useAppStore((state) => state.setLoading)
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
        Loading === true ? (
            <div>
                <Header></Header>
                <LoadingComponent></LoadingComponent>
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