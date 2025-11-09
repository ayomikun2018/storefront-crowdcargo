import { CrowdCargoIconProps } from "../../types";

export function CartIcon(props: CrowdCargoIconProps) {
  return (
    <svg
      width={30}
      height={33}
      viewBox="0 0 30 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.244 10.14V8.687c0-3.375 2.715-6.69 6.09-7.005 4.02-.39 7.41 2.775 7.41 6.72v2.07M10.507 31.628h9c6.03 0 7.11-2.415 7.424-5.355l1.125-9c.405-3.66-.645-6.644-7.05-6.644h-12c-6.404 0-7.454 2.985-7.049 6.645l1.125 9c.315 2.94 1.395 5.354 7.425 5.354z"
        stroke="currentColor"
        strokeWidth={2.57391}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.239 16.633h.013M9.745 16.633h.014"
        stroke="currentColor"
        strokeWidth={3.43189}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CartIcon;
