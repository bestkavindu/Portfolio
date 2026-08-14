import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export const ArrowIcon = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" {...stroke} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const UpRightIcon = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" strokeWidth="2" {...stroke} {...p}>
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export const DownloadIcon = (p: P) => (
  <svg width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.9" {...stroke} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
  </svg>
);

export const DocIcon = (p: P) => (
  <svg width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.8" {...stroke} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
  </svg>
);

export const GithubIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  </svg>
);

export const LinkedinIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.67h2.67v8.67zM7 8.5a1.54 1.54 0 1 1 0-3.08 1.54 1.54 0 0 1 0 3.08zM18.34 18.34h-2.67v-4.22c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23v4.29h-2.67V9.67h2.56v1.18h.04c.36-.68 1.24-1.4 2.55-1.4 2.72 0 3.22 1.79 3.22 4.12v4.77z" />
  </svg>
);

export const FacebookIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.7" {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.7" {...stroke} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const GlobeIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.7" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg width="13" height="13" viewBox="0 0 24 24" strokeWidth="2.6" {...stroke} {...p}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const SunIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.8" {...stroke} {...p}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
  </svg>
);

export const MoonIcon = (p: P) => (
  <svg width="17" height="17" viewBox="0 0 24 24" strokeWidth="1.8" {...stroke} {...p}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2z" />
  </svg>
);
