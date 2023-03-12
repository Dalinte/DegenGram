interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly DEGEN_ADDRESS_POLYGON: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
