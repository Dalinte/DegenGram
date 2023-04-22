const degenAddressPolygon = process.env.DEGEN_ADDRESS_POLYGON as string

const isDev = process.env.NODE_ENV === 'development'
const polygonChainId = isDev ? 80001 : 137

interface IChainConfig {
  chainName: string;
  rpcUrls: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
}

const ChainConfigPolygonDev: IChainConfig = {
  chainName: 'Polygon',
  rpcUrls: ['http://127.0.0.1:8545/'],
  nativeCurrency: {
    name: 'DEGEN',
    symbol: 'DEGEN',
    decimals: 18,
  },
  blockExplorerUrls: [],
}

const ChainConfigPolygonProd: IChainConfig = {
  chainName: 'Polygon Network',
  rpcUrls: ['https://polygon-rpc.com/'],
  nativeCurrency: {
    name: 'MATIC',
    symbol: 'MATIC',
    decimals: 18,
  },
  blockExplorerUrls: ['https://polygonscan.com/'],
}

const ChainConfigPolygon = isDev ? ChainConfigPolygonDev : ChainConfigPolygonProd

const domainApiUrl = process.env.DOMAIN_API_URL as unknown as string

export {
  degenAddressPolygon,
  polygonChainId,
  ChainConfigPolygon,
  IChainConfig,
  domainApiUrl,
}
