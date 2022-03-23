import * as React from 'react'

function DropDownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      style={{
        right: '12px',
        top: '12px',
        bottom: '12px',
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.25 7.311L12.53 18.03a.75.75 0 01-1.06 0L.75 7.311"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DropDownArrowSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={13}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.594 3.96L7.787 9.766a.406.406 0 01-.574 0L1.406 3.96"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { DropDownArrow, DropDownArrowSmall }
