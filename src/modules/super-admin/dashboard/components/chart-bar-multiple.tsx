import { Bar, BarChart } from 'recharts';

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
  { month: 'July', desktop: 73, mobile: 190 },
  { month: 'August', desktop: 209, mobile: 130 },
  { month: 'September', desktop: 214, mobile: 140 },
  { month: 'October', desktop: 110, mobile: 80 },
  { month: 'November', desktop: 190, mobile: 150 },
  { month: 'December', desktop: 70, mobile: 40 },
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

export function ChartBarMultiple() {
  return (
    <Card className='pb-0'>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className='h-[400px] w-full'>
          <BarChart accessibilityLayer data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dashed' />} />
            <Bar dataKey='desktop' fill='var(--color-desktop)' radius={10} />
            <Bar dataKey='mobile' fill='var(--color-mobile)' radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
