import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import React from 'react'

const SparkLine = ({ contentColor, id, type, height, width, data, color, currentColor }) => {
  return (
    <SparklineComponent
      type={type}
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine