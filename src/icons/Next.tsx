import * as React from 'react'

function Next(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.667 1.5l7.146 7.147a.5.5 0 010 .706L3.667 16.5"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Next
