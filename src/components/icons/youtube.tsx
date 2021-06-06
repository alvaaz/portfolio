import * as React from 'react';

export function Youtube(props: any) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 0c13.246 0 24 10.754 24 24S37.246 48 24 48 0 37.246 0 24 10.754 0 24 0zm14.373 16.78a3.757 3.757 0 00-2.652-2.653C33.381 13.5 24 13.5 24 13.5s-9.381 0-11.721.627a3.757 3.757 0 00-2.652 2.652C9 19.12 9 24 9 24s0 4.881.627 7.22a3.757 3.757 0 002.652 2.653C14.619 34.5 24 34.5 24 34.5s9.381 0 11.721-.627a3.757 3.757 0 002.652-2.652C39 28.88 39 24 39 24s0-4.882-.627-7.222zM21 28.5v-9l7.794 4.5L21 28.5z"
        fill="#fff"
      />
    </svg>
  );
}