import { parsePostList } from './parsePostList'

import { api } from '@/shared/lib'
import { postModel } from '@/widgets/posts/post'

export const fetchAndParsePostList = async (params: api.interfaces.IGetPostListParams, useMock = false): Promise<postModel.Post[]> => {
  try {
    const { posts } = await api.requests.fetchPostList(params, useMock)
    return parsePostList(posts)
  } catch (e) {
    return parsePostList([])
  }
}
