import web3 from 'web3'

// eslint-disable-next-line new-cap
const Web3 = new web3()

Web3.setProvider(window.ethereum)

export default Web3
