import { interfaces } from '@/shared/lib/api'

export interface IPost {
  id: string
  userName: string
  address: string
  content: string
  likeCount: number
  dislikeCount: number
  link: string
  createdAt: string
  isLiked: boolean
  isDisliked: boolean
  authorNickname: string
}

export class Post {
  public id = ''
  public userName = ''
  public address = ''
  public content = ''
  public likeCount = 0
  public dislikeCount = 0
  public link = ''
  public createdAt = ''
  public isLiked = false
  public isDisliked = false

  constructor (rawPosts: interfaces.IPost) {
    this.id = rawPosts.id
    this.userName = rawPosts.authorNickname
    this.address = rawPosts.authorNickname //  Сделать в апи другое поле
    this.isLiked = rawPosts.userReaction === 'LIKE'
    this.isDisliked = rawPosts.userReaction === 'DISLIKE'
    this.likeCount = rawPosts.likesCount
    this.dislikeCount = rawPosts.dislikesCount
    this.createdAt = rawPosts.createdAt
    this.content = rawPosts.content
  }

  get timePassed () {
    // TODO Добавить функцию, которая возвращает, сколько прошло с момента создания поста на основе поля this.createdAt
    return '23 s'
  }
}
