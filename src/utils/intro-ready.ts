type IntroReadyListener = () => void;

let introReady = false;
const listeners = new Set<IntroReadyListener>();

export function notifyIntroReady() {
  if (introReady) {
    return;
  }

  introReady = true;

  for (const listener of listeners) {
    listener();
  }

  listeners.clear();
}

export function whenIntroReady(listener: IntroReadyListener) {
  if (introReady) {
    listener();
    return () => {};
  }

  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
