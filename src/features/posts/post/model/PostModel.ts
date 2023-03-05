export interface IPost {
  id: number
  userName: string
  address: string
  text: string
  like: number
  dislike: number
  link: string
  time: string
  isLiked: boolean
  isDisliked: boolean
}

export class PostModel {
  public id = 0
  public userName = ''
  public address = ''
  public text = ''
  public like = 0
  public dislike = 0
  public link = ''
  public time = ''
  public isLiked = false
  public isDisliked = false

  constructor (obj: any) {
    (Object.keys(this) as (keyof typeof this)[])
      .forEach((key) => {
        const has = Object.prototype.hasOwnProperty.call(obj, key)
        this[key] = has ? obj[key] : this[key]
      })
  }
}
