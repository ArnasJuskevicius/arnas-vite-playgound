/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RICK_AND_MORTY_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
