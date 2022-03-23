import * as React from 'react'

function ChatBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={64}
      height={64}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 2.31a8 8 0 018 0l19.713 11.38a8 8 0 014 6.929V43.38a8 8 0 01-4 6.928L36 61.691a8 8 0 01-8 0L8.287 50.309a8 8 0 01-4-6.928V20.62a8 8 0 014-6.928L28 2.309z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.213 16.289L34.5 4.907a5 5 0 00-5 0L9.787 16.29a5 5 0 00-2.5 4.33V43.38a5 5 0 002.5 4.33L29.5 59.093a5 5 0 005 0L54.213 47.71a5 5 0 002.5-4.33V20.62a5 5 0 00-2.5-4.33zM36 2.309a8 8 0 00-8 0L8.287 13.691a8 8 0 00-4 6.928V43.38a8 8 0 004 6.928L28 61.691a8 8 0 008 0l19.713-11.382a8 8 0 004-6.928V20.62a8 8 0 00-4-6.928L36 2.309z"
        fill="#130B43"
      />
      <path
        clipRule="evenodd"
        d="M32.875 18.875a12.233 12.233 0 00-10.403 18.696l-3.597 7.554 7.554-3.597a12.25 12.25 0 106.446-22.653z"
        stroke="#130B43"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M36.375 33.75a3.5 3.5 0 11-7 0h7z"
        stroke="#130B43"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.625 28.938a.438.438 0 100 .875.438.438 0 000-.875zM38.125 28.938a.438.438 0 100 .875.438.438 0 000-.875z"
        stroke="#130B43"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChatBadge
