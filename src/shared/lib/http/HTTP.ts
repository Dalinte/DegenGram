import axios, { AxiosResponse } from 'axios'

export interface IHTTPParams {
  _domainApiUrl: string
}

export class HTTP {
  _domainApiUrl: string

  constructor ({ _domainApiUrl }: IHTTPParams) {
    this._domainApiUrl = _domainApiUrl
  }

  get<IParams, IResponse> (url: string, params: IParams): Promise<AxiosResponse<IResponse, any>> {
    console.log(this._domainApiUrl + url)

    return axios({
      method: 'get',
      url: this._domainApiUrl + url,
      params,
    })
  }

  post (url: string, params: any) {
    return axios({
      method: 'post',
      url: this._domainApiUrl + url,
      data: params,
    })
  }
}
