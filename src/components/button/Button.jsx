const BUTTON_COLOR = {
  solidColor: {
    primary: "btn-primary",
    success: "btn-success",
    danger: "btn-danger",
    warning: "btn-warning",
    dark: "btn-dark",
    info: "btn-info",
    link: "btn-link",
  },
  outlineColor: {
    primary: "btn-outline-primary",
    success: "btn-outline-success",
    danger: "btn-outline-danger",
    warning: "btn-outline-warning",
  },
};

const BUTTON_SIZE = {
  sm: "btn-sm",
  lg: "btn-lg",
};

function ButtonTag({
  type,
  className,
  label,
  buttonColor,
  buttonSize,
  disabled,
  onClick = () => {},
  loading,
  children,
  ...rest
}) {
  return (
    <button
      className={`btn ${className} ${buttonColor} ${buttonSize}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
      {label}
      {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
    </button>
  );
}

/**
 * Button Component
 * @param {*} type
 * @param {*} className
 * @param {*} label : Button name
 * @param {*} color : Button color
 * @param {*} size : Button Size
 * @param {*} disabled : Boolean value
 * @param {*} onClick : Function
 * @param {*} loading : Boolean value
 */
export function Button({
  type = "button",
  className = "",
  label = "",
  color = "primary",
  size = "",
  disabled = false,
  onClick = () => {},
  loading = false,
  children,
  ...rest
}) {
  //Button Color
  const buttonColor = BUTTON_COLOR.solidColor[color] || "";

  //Button Size
  const buttonSize = BUTTON_SIZE[size] || "";

  return (
    <ButtonTag
      type={type}
      className={className}
      label={label}
      disabled={disabled}
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      onClick={onClick}
      loading={loading}
      children={children}
      {...rest}
    />
  );
}

/**
 * Outline Button
 * @param {*} type
 * @param {*} className
 * @param {*} label : Button name
 * @param {*} color : Button color
 * @param {*} size : Button Size
 * @param {*} disabled : Boolean value
 * @param {*} onCLick : Function
 * @param {*} loading : Boolean value
 */
export function OutlineButton({
  type = "button",
  className = "",
  label = "",
  color = "primary",
  size = "",
  disabled = false,
  onClick = () => {},
  loading = false,
  children,
  ...rest
}) {
  //Button Color
  const buttonColor = BUTTON_COLOR.outlineColor[color] || "";

  //Button Size
  const buttonSize = BUTTON_SIZE[size] || "";

  return (
    <ButtonTag
      type={type}
      className={className}
      label={label}
      disabled={disabled}
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      onClick={onClick}
      loading={loading}
      children={children}
      {...rest}
    />
  );
}
