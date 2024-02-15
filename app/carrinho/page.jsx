'use client'
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChartStagesIcons from '../../components/chartStages/ChartStagesIcons';
import LoadingComponent from '../../components/LoadingComponent';
import { useAppStore } from '../../store/AppStore';
import { useChartStore } from '../../store/ChartStore';
import { getChart } from '../api/requests';

import ChartStage from '../../components/chartStages/ChartStage';
import IdentificationStage from '../../components/chartStages/IdentificationStage';
import PaymentStage from '../../components/chartStages/PaymentStage';
import RevisionStage from '../../components/chartStages/RevisionStage';
import CompleteStage from '../../components/chartStages/CompleteStage';

export default function Carrinho() {
    const Loading = useAppStore((state) => state.Loading)
    const setLoading = useAppStore((state) => state.setLoading)

    const chartStage = useChartStore((state) => state.ChartStage)
    const setChartStage = useChartStore((state) => state.setChartStage)

    const [userChart, setUserChart] = useState([]);

    useEffect(() => {
        getChart((carrinho) => {
            setUserChart(carrinho);
            setChartStage('chart')
        });
        setLoading(false)
    }, [])

    return (
        <div className='flex flex-col'>
            {Loading === true && (
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