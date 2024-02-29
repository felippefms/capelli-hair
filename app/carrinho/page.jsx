'use client'
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChartStagesIcons from '../../components/chartStages/ChartStagesIcons';
import LoadingComponent from '../../components/LoadingComponent';
import { useChartStore } from '../../store/ChartStore';
import { getChart, getChartTotalValue } from '../api/requests';

import ChartStage from '../../components/chartStages/ChartStage';
import IdentificationStage from '../../components/chartStages/IdentificationStage';
import PaymentStage from '../../components/chartStages/PaymentStage';
import RevisionStage from '../../components/chartStages/RevisionStage';
import CompleteStage from '../../components/chartStages/CompleteStage';

export default function Carrinho() {
    const [loading, setLoading] = useState(true);
    const chartStage = useChartStore((state) => state.ChartStage)
    const setChartStage = useChartStore((state) => state.setChartStage)
    const setChartTotalValue = useChartStore((state) => state.setChartTotalValue)
    const [userChart, setUserChart] = useState([]);

    useEffect(() => {
        getChart((carrinho) => {
            setUserChart(carrinho);
            setChartStage('chart')
        });

        getChartTotalValue((totalValue)=>{
            setChartTotalValue(totalValue);
        })
        setLoading(false)
    }, [])

    return (
        <div className='flex flex-col'>
            {loading === true && (
                <LoadingComponent></LoadingComponent>
            )}
            <Header></Header>
            <ChartStagesIcons chartStage={chartStage}></ChartStagesIcons>

            {chartStage === 'chart' &&
                <ChartStage userChart={userChart}></ChartStage>
            }

            {chartStage === 'identification' &&
                <IdentificationStage></IdentificationStage>
            }

            {chartStage === 'payment' &&
                <PaymentStage></PaymentStage>
            }

            {chartStage === 'revision' &&
                <RevisionStage></RevisionStage>
            }

            {chartStage === 'complete' &&
                <CompleteStage></CompleteStage>
            }

            <Footer></Footer>
        </div>
    )
}