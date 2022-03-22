import * as React from 'react'

function BadgeContribution(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ paddingLeft: '12px !important' }}
      {...props}
    >
      <g clipPath="url(#prefix__clip0_8_144)" stroke="#E2CB2D">
        <path
          d="M12.502 5.25h-1.005C10.575 6.574 8.46 7.5 6 7.5v3.775a6.693 6.693 0 005.07 6.492L12 18l.93-.233A6.692 6.692 0 0018 11.275V7.5c-2.46 0-4.571-.926-5.498-2.25z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.131 11.1l.3-.04.103-.284.323-.888.354.875.114.279.3.03 1.273.13-.798.685-.228.195.066.293.237 1.06-.968-.696-.303-.219-.295.23-.942.73.199-1.069.054-.294-.234-.188-.823-.656 1.268-.172zm.944-1.809c0 .003-.002.005-.003.008l-.222-.081-.004-.002h-.003v-.001l-.003-.001-.238-.087.244.085h.002l.227.08zm-.454.013l-.001-.003h0l.001.003z" />
        <path
          d="M.75 7.5h3M1.5 9.75h2.25M2.25 12h1.5M3 14.25h1.5M23.25 7.5h-3M22.5 9.75h-2.25M21.75 12h-1.5M21 14.25h-1.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_8_144">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default BadgeContribution
