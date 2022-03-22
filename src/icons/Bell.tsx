import * as React from 'react'

function Bell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={23}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.75 20.031a1.826 1.826 0 003.504 0M10.5 3.625V1.656"
        stroke="#E48900"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M10.5 3.625a6.562 6.562 0 016.563 6.563c0 6.165 1.312 7.218 1.312 7.218H2.625s1.313-1.676 1.313-7.218A6.562 6.562 0 0110.5 3.625z"
        stroke="#E48900"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Bell
