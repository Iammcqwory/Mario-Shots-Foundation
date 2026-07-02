declare global {
  interface Window {
    rioAnalytics?: { track: (event: string, payload?: Record<string, unknown>) => void };
  }
}

export {};


