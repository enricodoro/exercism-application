import * as React from 'react'

function Lego(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.25 23.25H1.5a.75.75 0 01-.75-.75v-5.25M8.25 17.25H.75v-6M12.75 11.25h-12V6a.75.75 0 01.75-.75H12a.75.75 0 01.75.75v5.25M1.5 5.25V3a.75.75 0 01.75-.75H4.5a.75.75 0 01.75.75v2.25M8.25 5.25V3A.75.75 0 019 2.25h2.25A.75.75 0 0112 3v2.25M12 17.25V15a.75.75 0 01.75-.75H15a.75.75 0 01.75.75v2.25M18.75 17.25V15a.75.75 0 01.75-.75h2.25a.75.75 0 01.75.75v2.25"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M11.25 18a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V18z"
        stroke="#5C5589"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lego
