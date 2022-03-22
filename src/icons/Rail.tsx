import * as React from 'react'

function Rail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0_6_62)"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5.763v22.5M17 .763v22.5M21.5 4.513H2v5.25h19.5v-5.25zM21.5 15.013H2v5.25h19.5v-5.25z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_6_62">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Rail
