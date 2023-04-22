import { requests } from '@/shared/lib'
import { parsePostList } from './parsePostList'
import { postModel } from '@/widgets/posts/post'

export const fetchAndParsePostList = async (params: requests.fetchPostListLib.IGetPostListParams): Promise<postModel.Post[]> => {
  try {
    const { posts } = await requests.fetchPostListLib.fetchPostList(params)
    return parsePostList(posts)
  } catch (e) {
    return parsePostList([])
  }
}
