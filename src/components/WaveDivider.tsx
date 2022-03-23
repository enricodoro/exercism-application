import * as React from 'react'

function WaveDivider(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={78}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.8 13l8.4-9 15.6 12L39 4.9 52.8 16l9.3-10.2L76.2 16"
        stroke="#130B43"
        strokeWidth={3}
      />
    </svg>
  )
}

export default WaveDivider
