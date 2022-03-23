import * as React from 'react'

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M14.54 18.803A8.056 8.056 0 108.238 3.974a8.056 8.056 0 006.302 14.829z"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.085 17.084l6.248 6.25"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SearchIcon
