import * as React from 'react'

function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M7.991 16.502a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM7.991 5.002a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM7.991 10.752a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        stroke="#6A6781"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Menu
