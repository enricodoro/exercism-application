import * as React from 'react'

function LeftArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.625 6H1.375M6.625.75L1.375 6l5.25 5.25"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LeftArrow
