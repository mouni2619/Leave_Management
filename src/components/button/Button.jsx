function constructClassname(disabled, loading, className) {
  const modifierClassName = disabled || loading ? 'opacity-25' : 'd-flex';
  return `btn ${className} ${modifierClassName}`;
}

/**
 * Button Component
 * @param {*} className
 * @param {*} disabled : Boolean value
 * @param {*} onClick : Function
 * @param {*} loading : Boolean value
 */
export default function Button({
  className = '',
  disabled = false,
  onClick = () => {},
  loading = false,
  icon = '',
  children,
}) {
  const btnClassName = constructClassname(disabled, loading, className);
  return (
    <button className={btnClassName} disabled={disabled} onClick={onClick}>
      {!loading && icon}
      {loading && (
        <span
          className="spinner-border spinner-border-sm ms-2"
          role="status"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
}
