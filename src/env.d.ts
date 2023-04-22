interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly DEGEN_ADDRESS_POLYGON: string
  readonly DOMAIN_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
