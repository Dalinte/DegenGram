import { postListApiMock } from '../response/postListApiMock'

import { HTTPDeden } from '@/shared/lib'
import { IGetPostListParams, IPostListResponse } from '@/shared/lib/api/interfaces'

export const fetchPostList = async (params: IGetPostListParams, useMock = false): Promise<IPostListResponse> => {
  try {
    if (useMock) {
      return new Promise((resolve) => {
        resolve({ posts: postListApiMock })
      })
    }

    const { data } = await HTTPDeden.get<IGetPostListParams, IPostListResponse>('/api/post', params)

    return data
  } catch (e) {
    console.error('Fail to fetch post list', e)
    return {
      posts: [],
    }
  }
}
