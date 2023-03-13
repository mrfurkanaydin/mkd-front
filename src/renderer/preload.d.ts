import { ElectronHandler } from 'main/preload';

// declare global {
//   // eslint-disable-next-line no-unused-vars
//   interface Window {
//     electron: ElectronHandler;
//   }
// }

declare global {
  interface Window {
    electron: {
      ipcRenderer: any;
      ElectronHandler: ElectronHandler;
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

export {};
