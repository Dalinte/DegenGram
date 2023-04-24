import { Post } from '../post/model/Post'

import { fetchPostListLib } from '@/shared/lib/api/requests'

export const parsePostList = (rawPostList: fetchPostListLib.TPosts): Post[] => {
  return rawPostList.map((post) => new Post(post))
}
