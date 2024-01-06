'use client'
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChartStagesStatus from '../../components/chartStages/ChartStagesStatus';
import Loading from '../../components/Loading';
import { getChart } from '../api/requests';

import ChartStage from '../../components/chartStages/ChartStage';

export default function Carrinho(){
    const [loading, setLoading] = useState(true);
    const [userChart, setUserChart] = useState([]);

    const [chartStage, setChartStage] = useState();

    useEffect(()=>{
        getChart(2,(carrinho) => {
            setUserChart(carrinho);
            setChartStage('chart')
        });
        setLoading(false)
    },[])
    console.log(userChart);

    return(
        <div className='flex flex-col'>
            {loading === true &&(
                <Loading></Loading>
            )}
            <Header></Header>
            <ChartStagesStatus chartStage={chartStage}></ChartStagesStatus>

            {chartStage === 'chart' &&
                <ChartStage userChart={userChart} setChartStage={setChartStage}></ChartStage>
            }
            
            {chartStage === 'identification' &&
                <p> 2- identification</p>
            }

            {chartStage === 'payment' &&
                <p> 3- payment</p>
            }

            {chartStage === 'revision' &&
                <p> 4- revision</p>
            }

            {chartStage === 'complete' &&
                <p> 5- complete</p>
            }
            
            <Footer></Footer>
        </div>
    )
}