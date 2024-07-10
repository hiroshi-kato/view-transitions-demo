export interface ViewTransition {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
  skipTransition: () => undefined;
}

declare global {
  interface Document {
    startViewTransition?: (cb: () => Promise<void> | void) => ViewTransition;
  }
}
