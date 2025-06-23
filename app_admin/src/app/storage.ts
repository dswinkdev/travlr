import { InjectionToken } from '@angular/core';

/**
 * Token to inject browser local storage.
 */
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

/**
 * Optional class to encapsulate localStorage logic (can be extended as needed).
 */
export class Storage {
  // This class can hold utility methods to wrap localStorage functionality if desired
}
