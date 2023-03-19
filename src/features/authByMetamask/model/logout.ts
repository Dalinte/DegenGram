import { authByMetamaskLib } from '@/features/authByMetamask'

export const logout = () => {
  authByMetamaskLib.setUserAddress('')
  localStorage.removeItem(authByMetamaskLib.IS_USER_LOGIN)
}
