import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
      width={23}
      height={25}
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.598 18.372h0c-.053-.058-.111-.118-.173-.183-.456-.479-1.139-1.194-1.7-2.33-.64-1.297-1.104-3.085-1.104-5.703 0-3.294-2.301-5.943-5.45-6.597l-.797-.165V1.562a.562.562 0 10-1.123 0V3.394l-.797.165c-3.148.654-5.45 3.303-5.45 6.597 0 2.618-.463 4.406-1.104 5.703-.561 1.136-1.244 1.851-1.7 2.33-.062.065-.12.125-.172.182h19.57zm0 0c.113.121.153.25.152.371h0m-.152-.371l.152.372m0 0a.563.563 0 01-.567.569H2.443a.564.564 0 01-.568-.57H21.75zm-8.063 4.131a2.123 2.123 0 01-3.749 0h3.749zM1.875 18.743c0-.121.039-.25.152-.372l-.152.372z"
        fill="#D9D9D9"
        stroke={props.stroke||"#000"}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Notification
