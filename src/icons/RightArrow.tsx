import * as React from 'react'

function RightArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.375 6h11.25M7.375 11.25L12.625 6 7.375.75"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RightArrow
