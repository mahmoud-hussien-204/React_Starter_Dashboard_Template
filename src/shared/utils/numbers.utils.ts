export function formatNumberUtil(num: number): string {
  if (!isFinite(num)) return '0';

  const formatter = new Intl.NumberFormat('en-US', {
    useGrouping: true,
    maximumFractionDigits: 20,
    minimumFractionDigits: 1,
  });

  return formatter.format(num);
}
