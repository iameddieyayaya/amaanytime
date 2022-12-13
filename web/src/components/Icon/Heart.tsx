interface IHeart {
  className?: string
  height?: string
  width?: string
}

const Heart = ({
  className = '',
  height = '24',
  width = '24',
}: IHeart): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.73768 3.99392C2.99976 2.65621 4.69083 2 6.38195 2C8.02154 2 9.68611 2.63014 10.9227 3.86527C10.9235 3.86613 10.9244 3.86699 10.9253 3.86785L11.9854 4.92795L13.0455 3.86785C14.3075 2.63102 15.9482 2 17.5888 2C19.2295 2 20.8953 2.63102 22.1321 3.86785C24.631 6.36667 24.631 10.4558 22.0817 12.9543L12.7175 22.3186C12.3136 22.7477 11.632 22.7477 11.2029 22.3186L1.93963 13.0553C-0.533883 10.5817 -0.685507 6.54317 1.73768 3.99392ZM20.194 5.74846C19.4935 5.06385 18.54 4.7 17.5888 4.7C16.6442 4.7 15.6898 5.0611 14.9438 5.78787L11.9854 8.74633L9.01607 5.77704C8.31301 5.07398 7.34634 4.7 6.38195 4.7C5.39028 4.7 4.42419 5.08087 3.70158 5.84678L3.69466 5.85412C2.32968 7.29011 2.3596 9.65682 3.84882 11.1461C3.84882 11.1461 3.84881 11.1461 3.84882 11.1461L11.9602 19.2575L20.1821 11.0356L20.1918 11.0261C21.6642 9.58298 21.6642 7.21861 20.2229 5.77738L20.194 5.74846Z" />
    </svg>
  )
}

export { Heart }
