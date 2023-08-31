import React from "react";



const chooseVariant = (type) => {
  switch (type) {
    case 'outline':
      return 'border-2 text-blue-800 border-blue-800 bg-transparent hover:bg-blue-300'
    case 'text':
      return 'text-blue-800 bg-transparent  hover:bg-blue-200'
    default:
      return 'text-black font-bold'
  }
}
const chooseSize = (size) => {
  switch (size) {
    case 'sm':
      return 'text-xs';
    case 'md':
      return 'text-sm';
    case 'lg':
      return 'text-xl px-3 py-4';
    default:
      return 'px-4 py-2 text-lg';
  }
}

const chooseColor = (color) => {
  switch (color) {
    case 'primary':
      return 'bg-blue-700 hover:bg-blue-900 text-white'
    case 'secondary':
      return 'bg-gray-600 hover:bg-gray-700 text-white'
    case 'danger':
      return 'bg-red-600 hover:bg-red-800 text-white'
    default:
      return 'bg-gray-200 hover:bg-gray-400'
  }
}

const Button = (props) => {

  const common = `px-4 py-2 text-lg font-semibold rounded-lg font-NotoSansJp `;

  const color = (props.endIcon || props.startIcon || props.size) ? 'bg-blue-700 hover:bg-blue-900 text-white': chooseColor(props.color);
  const size = chooseSize(props.size)
  const variant = chooseVariant(props.variant);
  const disableShadow = props.disableShadow ? 'shadow-0' : 'shadow-sm';
  const disabled = props.disabled ;

  const startIcon = props.startIcon;
  const endIcon = props.endIcon;
  const buttonStyle = `${common} ${color} ${size} ${variant} ${disableShadow} ${disabled && 'cursor-not-allowed  disabled:opacity-80 disabled:text-gray-900  '} ${(props.variant === 'text' && props.disabled) && 'disabled:hover:bg-transparent '}`
  return (
    <>
      <button className={buttonStyle} disabled={true} >
        {startIcon && <i class={startIcon}></i>}
        <span className="mx-3">Default</span>
        {endIcon && <i class={endIcon}></i>}
      </button>
    </>
  );
};

export default Button;
