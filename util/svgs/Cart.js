import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Cart(props) {
  return (
    <Svg
      width={22}
      height={25}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.188 7.813v1H20.874v12.28A2.906 2.906 0 0117.969 24H3.906A2.906 2.906 0 011 21.094V8.812H5.688V6.25A5.257 5.257 0 0110.938 1a5.257 5.257 0 015.25 5.25v1.563zm-2.125 1h1V6.25a4.129 4.129 0 00-4.126-4.125A4.129 4.129 0 006.814 6.25V8.813h7.25zm-.61 2.124a2.172 2.172 0 104.344 0 2.172 2.172 0 00-4.344 0zm-9.375 0a2.172 2.172 0 104.344 0 2.172 2.172 0 00-4.344 0z"
        fill="#D9D9D9"
        stroke={props.stroke||"#000"}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default Cart
