import { Area, AreaChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/components/ui/chart';

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export function ChartAreaGradient() {
  return (
    <Card className='overflow-hidden pb-0'>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>Showing total visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className='mt-auto !px-0'>
        <ChartContainer config={chartConfig} className='h-[300px] w-full'>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-desktop)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-desktop)' stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='var(--color-mobile)' stopOpacity={0.8} />
                <stop offset='95%' stopColor='var(--color-mobile)' stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey='mobile'
              type='natural'
              fill='url(#fillMobile)'
              fillOpacity={0.4}
              stroke='var(--color-mobile)'
              stackId='a'
            />
            <Area
              dataKey='desktop'
              type='natural'
              fill='url(#fillDesktop)'
              fillOpacity={0.4}
              stroke='var(--color-desktop)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
