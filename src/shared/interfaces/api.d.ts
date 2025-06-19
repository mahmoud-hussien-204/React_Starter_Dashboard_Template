interface IApiResponse<T> {
  status: number;
  message: IApiMessage;
  data: T;
  meta: IApiMeta;
}

type IApiMessage = string;

interface IApiMeta {
  page: number;
  pagesCount: number;
}

interface IApiError {
  message: IApiMessage;
  status: number;
}

interface IApiSearchParams {
  page: number;
  limit: number;
  order: 'asc' | 'desc';
  orderBy: string;
  search: string;
}
