export function toQueryStringUtil(params: Record<string, string | boolean | number>) {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (params[key]) {
      searchParams.set(key, params[key].toString());
    }
  }

  return searchParams.toString();
}

export function getFilterValueUtil(filter: string | null) {
  if (!filter) return '';
  if (filter === 'none') return '';
  return filter;
}
