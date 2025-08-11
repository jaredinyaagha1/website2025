import "tailwindcss/types/config"

declare module "tailwindcss/types/config" {
  interface Config {
    daisyui?: {
      themes?: boolean | string[] | Record<string, unknown>
      darkTheme?: string
      base?: boolean
      styled?: boolean
      utils?: boolean
      rtl?: boolean
      prefix?: string
      logs?: boolean
    }
  }
}

declare module "tailwindcss/types/config" {
  interface Config { daisyui?: DaisyUIOptions }
  interface UserConfig { daisyui?: DaisyUIOptions }
}