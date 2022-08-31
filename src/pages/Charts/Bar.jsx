import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, 
  Inject, Legend, Category, Tooltip, DataLabel, 
  ColumnSeries } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } 
from '../../contexts/ContextProvider';

const Bar = () => {
  const {currentMode} = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg
    rounded-3xl'>
    <Header category='Chart' title='Bar' />
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={barPrimaryXAxis} 
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      title='Olympic Medal Counts - RIO'
      tooltip={{enable: true}}
      background={currentMode=== 'Dark' ? '#33373E' : '#fff'}
      >
      
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item}/>
          })}
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Bar