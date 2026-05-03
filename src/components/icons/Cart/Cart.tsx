export const Cart = (props: any) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <circle
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      cx={22}
      cy={24}
      r={2}
    />
    <circle
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeMiterlimit: 10,
      }}
      cx={13}
      cy={24}
      r={2}
    />
    <path
      style={{ fill: "currentColor" }}
      d="M25.658,10l-2.422,9H10.781L8.159,8.515C7.937,7.625,7.137,7,6.219,7H4C3.448,7,3,7.448,3,8c0,0.552,0.448,1,1,1h2.219 l2.621,10.485C9.063,20.375,9.863,21,10.781,21h12.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H25.658z"
    />
  </svg>
);
