import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Favorate(props) {
  return (
    <Svg
      width={25}
      height={22}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.183 2.856h0l-.963.991-.717.74-.718-.74-.962-.99-.001-.002C8.694.655 5.306.358 3.078 2.257.458 4.494.316 8.523 2.664 10.95l11.519-8.095zm0 0c2.133-2.201 5.516-2.497 7.744-.6 2.62 2.238 2.762 6.267.41 8.695h-.001l-9.448 9.756a.53.53 0 01-.776 0l-9.447-9.755 11.518-8.096z"
        fill="#D9D9D9"
        stroke={props.stroke||"#000"}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Favorate
