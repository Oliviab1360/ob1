export const isBrowser = typeof window !== 'undefined';

/** Deployment sub-path (e.g. `/ob1` in production, `''` in local dev). */
export const basePath = process.env.NEXT_PUBLIC_BASEPATH ?? '';

/** Public origin of the deployed site (no trailing slash). */
export const siteUrl = 'https://oliviab1360.github.io/ob1';

/** Prefix an absolute site path so it resolves under the deployment sub-path. */
export const withBasePath = (path: string): string => `${basePath}${path}`;
export const isMobile = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
export const isApple: boolean = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
