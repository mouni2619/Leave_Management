//Component
import { Button } from "../button/Button";

/**
 * Dropdown Component
 * @param parentClassName : Dropdown class
 * @param DropdownButtonClassName : Dropdown button class
 * @param imageUrl : Image Url
 * @param label : Button name
 * @param dropDownItems : Array of dropdown menu
 * @param children
 */
export function Dropdown({
  parentClassName = "",
  DropdownButtonClassName = "",
  imageUrl = "",
  label = "",
  dropDownItems = [],
  children,
}) {
  return (
    <div className={`nav-item dropdown ${parentClassName}`}>
      {/* Button Component */}
      <Button
        className={`nav-link dropdown-toggle ${DropdownButtonClassName} me-2`}
        color="link"
        label={label}
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        data-display="static"
        aria-expanded="true"
      >
        {imageUrl && (
          <img
            className="rounded-circle header-profile-user me-2"
            src={imageUrl}
            alt="Avatar"
          />
        )}
      </Button>

      <div className="dropdown-menu ps-2 mt-3">
        {dropDownItems.map((menu, index) => {
          const { buttonName, buttonClassName, iconClassName, onClick } = menu;

          return (
            // Button Component
            <Button
              key={index}
              label={buttonName}
              className={buttonClassName}
              onClick={onClick}
              color=""
            >
              <i className={`${iconClassName} fa-sm me-2 p-1`}></i>
            </Button>
          );
        })}
        {children}
      </div>
    </div>
  );
}
