export {}
declare global {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    SPOTIFY_ACCESS_TOKEN: string
  }
  interface Process {
    env: ProcessEnv
  }
  let process: Process
}
