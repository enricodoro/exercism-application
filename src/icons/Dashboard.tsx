import * as React from 'react'

function Dashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M12 12.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 17.25a1.5 1.5 0 01-1.5 1.5H9a1.5 1.5 0 010-3h6a1.5 1.5 0 011.5 1.5z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.178 3.498l.513 1.409M4.855 7.125l1.299.75M3.875 12.683l1.478-.261M14.822 3.498l-.513 1.409M19.145 7.125L13.299 10.5M20.125 12.683l-1.478-.261"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Dashboard
