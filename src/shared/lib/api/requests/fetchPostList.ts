import { HTTPDeden } from '@/shared/lib'

export interface IGetPostListParams {
  limit: number
  offset: number
}

export interface IPost {
  id: string
  authorUUID: string,
  content: string,
  createdAt: string,
  likesCount: number,
  dislikesCount: number,
  authorNickname: string,
  userReaction: null | 'LIKE' | 'DISLIKE'
}

export type TPosts = IPost[]

export interface IPostListResponse {
  posts: TPosts
}

export const fetchPostList = async (params: IGetPostListParams): Promise<IPostListResponse> => {
  try {
    const { data } = await HTTPDeden.get<IGetPostListParams, IPostListResponse>('/api/post', params)

    return data
  } catch (e) {
    console.error('Fail to fetch post list', e)
    return {
      posts: [],
    }
  }
}
