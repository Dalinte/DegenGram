export interface IGetPostListParams {
  limit: number
  offset: number
  address?: string
}

export interface IPost {
  id: string
  authorUUID: string,
  content: string,
  createdAt: string,
  likesCount: number,
  dislikesCount: number,
  authorNickname: string,
  authorAddress: string,
  userReaction: null | 'LIKE' | 'DISLIKE'
}

export type TPosts = IPost[]

export interface IPostListResponse {
  posts: TPosts
}
