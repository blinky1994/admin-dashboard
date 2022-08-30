import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } 
from '@syncfusion/ej2-react-charts';
import { TiHeadphones } from 'react-icons/ti';

class SparkLine extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType='Numeric'
        fill={color}
        border={{ color: currentColor, width: 2}}
        dataSource={data}
        xName='xval'
        yName='yval'
        type={type}
        tooltipSettings={{
          visible:true,
          format: '${xval}: data ${yval}',
          trackLineSettings: {
            visible: true
          }
        }}
      >
          <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    )
  }
}

export default SparkLine