import { Post } from '../post/model/Post'

import { interfaces } from '@/shared/lib/api'

export const parsePostList = (rawPostList: interfaces.TPosts): Post[] => {
  return rawPostList.map((post) => new Post(post))
}
