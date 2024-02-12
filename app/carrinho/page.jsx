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