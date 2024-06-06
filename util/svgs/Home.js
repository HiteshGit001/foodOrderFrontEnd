import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Home(props) {
  return (
    <Svg
      width={25}
      height={20}
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.807 9.993l-.497.604-9.84-8.105h0l-.009-.006a1.529 1.529 0 00-1.92 0h0l-.007.006-9.84 8.105-.499-.607 10.616-8.743s0 0 0 0a1.083 1.083 0 011.377 0h0l3.886 3.198 1.635 1.345V1h1.472V7.004l.364.3 3.262 2.689zM.89 9.619l.002.003-.002-.003zm4.277 2.487l7.335-6.04 7.332 6.036v6.34l-4.25-.012V14.58a1.694 1.694 0 00-1.695-1.694H11.11a1.694 1.694 0 00-1.695 1.694v3.85l-4.249.01v-6.335zm10.11 6.323h.003-.002zm.306.306v-.003.003z"
        fill="#D9D9D9"
        stroke={props.stroke||"#000"}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Home
