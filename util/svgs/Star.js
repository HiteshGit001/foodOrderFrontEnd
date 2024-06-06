import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Start(props) {
  return (
    <Svg
      width={12}
      height={15}
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.5}
        d="M4.079 5.383l.55-.105.198-.524L6 1.648l1.173 3.106.198.524.55.105L11 5.969a.195.195 0 01-.008.041L8.625 9.023l-.26.33.055.418.514 3.908-2.368-1.626L6 11.665l-.566.388-2.368 1.626.514-3.908.055-.417-.26-.331L1.008 6.01A.19.19 0 011 5.968l3.078-.585zm5.419 8.683h0z"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Start
