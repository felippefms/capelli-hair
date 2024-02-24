'use client';

import { useState, useEffect } from 'react';
import { ProductsByCategoryName } from '../../api/requests';
import ExclusiveColorsBox from '../../../components/ProductBox';
import LoadingComponent from '../../../components/LoadingComponent';
import Header from '../../../components/Header';
import ContentBox5 from '../../../components/ContentBox5';
import ContentBox6 from '../../../components/ContentBox6';
import Footer from '../../../components/Footer';

export default function Categoria({ params }) {
  const [produtos, setProdutos] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = ({ params }) => {
    ProductsByCategoryName(params.categoria, (produtos) => {
      setProdutos(produtos);
      setLoading(false);
    });
};

  useEffect(()=>{
    fetchAllProducts({ params });
  },[]);

  return (
    loading === true ? (
      <div>
        <Header />
        <LoadingComponent />
        <ContentBox5 />
        <ContentBox6 />
      </div>
    )
    :
    (
    <div>
      <Header />
      <div className='flex mt-4 justify-center items-center'>
        <div className='w-[1200px] flex flex-wrap justify-center items-center'>
          {produtos && produtos.map((produto, index) => (
          <div key={index} className="flex flex-row max-lg:flex-col justify-center">
            <div className="flex justify-center">
              <ExclusiveColorsBox nome={produto?.name?produto.name:'sem nome'} valor={produto?.value ? produto.value:0} categoria={params.categoria} idproduto={produto?.id ? produto.id:'/'}/>
            </div>
          </div>
          ))}
        </div>
      </div>
      <ContentBox5 />
      <ContentBox6 />
      <Footer />
    </div>
    )
  );
}
