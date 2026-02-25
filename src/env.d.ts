declare interface Env {
  readonly NG_APP_API_URL: string;
  readonly NG_APP_API_KEY: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
