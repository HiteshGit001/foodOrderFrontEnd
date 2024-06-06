import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TabBar(props) {
  return (
    <Svg
      width={430}
      height={84}
      viewBox="0 0 430 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M176.019 0H-7v84h454V0H263.98c-.545 23.505-20.027 42.394-43.98 42.394-23.954 0-43.436-18.89-43.981-42.394z"
        fill="#fff"
        fillOpacity={0.8}
      />
    </Svg>
  )
}

export default TabBar
