import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

import { type ChartConfig, ChartContainer } from '@/shared/components/ui/chart';

const chartData = [
  [{ browser: 'safari', visitors: 500, fill: 'var(--color-safari)' }],
  [{ browser: 'chrome', visitors: 1260, fill: 'var(--color-chrome)' }],
];

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-2)',
  },
  chrome: {
    label: 'Chrome',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export function ChartRadialShape() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Radial Chart - Shape</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-1 flex-wrap items-center justify-around pb-0'>
        {chartData.map((data, index) => (
          <div key={index}>
            <ChartContainer config={chartConfig} className='mx-auto aspect-square h-[200px]'>
              <RadialBarChart
                data={data}
                endAngle={100 * (index + 1)}
                innerRadius={80}
                outerRadius={140}
              >
                <PolarGrid
                  gridType='circle'
                  radialLines={false}
                  stroke='none'
                  className='first:fill-muted last:fill-background'
                  polarRadius={[86, 74]}
                />
                <RadialBar dataKey='visitors' background />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor='middle'
                            dominantBaseline='middle'
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className='fill-foreground text-4xl font-bold'
                            >
                              {data[0].visitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className='fill-muted-foreground'
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
              </RadialBarChart>
            </ChartContainer>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
