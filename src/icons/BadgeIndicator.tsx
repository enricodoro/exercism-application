import * as React from 'react'

function BadgeIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 1.732L20.392 6a2 2 0 011 1.732v8.536a2 2 0 01-1 1.732L13 22.268a2 2 0 01-2 0L3.608 18a2 2 0 01-1-1.732V7.732a2 2 0 011-1.732L11 1.732a2 2 0 012 0z"
        fill="#fff"
        stroke="url(#prefix__paint0_linear_7_112)"
        strokeWidth={2}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_7_112"
          x1={12}
          y1={0}
          x2={12}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#20F" />
          <stop offset={1} stopColor="#9E00FF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BadgeIndicator
