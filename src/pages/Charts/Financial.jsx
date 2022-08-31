import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  Inject, HiloSeries, Category, Tooltip, Zoom, 
  Crosshair, Legend } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis, } from '../../data/dummy';

const Financial = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg
    rounded-3xl'>
    <Header category='Chart' title='Hilo' />
    <ChartComponent 
     id='charts'
     style= { {textAlign: "center"} }
     primaryXAxis={FinancialPrimaryXAxis} 
     primaryYAxis={FinancialPrimaryYAxis} 
     legendSettings={ {visible: true} }
     tooltip={{enable: true}}
     title='Maximum and Minimum Rainfall'>
      
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom, Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={financialChartData} xName='x' yName='low' name='India' type='Hilo' low='low' high='high'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Financial