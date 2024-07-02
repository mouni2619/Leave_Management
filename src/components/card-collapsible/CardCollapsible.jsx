import React from "react";
import { useState } from "react";

// CSS
import "./CardCollapsible.scss";

// Component
// ----------------------------------------------------------------------------

export default function CardCollapsible({
  children,
  className = "",
  id,
  header,
  subHeader,
  collapsed = true,
  disabled,
}) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div className={`card card-collapsible ${className}`} id={id}>
      <div
        className="card-header"
        data-toggle="collapse"
        data-target={`#body-${id}`}
        aria-expanded={!isCollapsed}
        onClick={() => setIsCollapsed(!isCollapsed)}
        disabled={disabled}
      >
        {/** Chevron :: d-inline-block float-right mt-1 mr-1 */}
        {isCollapsed ? <i className="fa fa-plus" /> : <i className="fa fa-minus" />}

        <label className="">{header}</label>
        {subHeader && ( //
          <label className="sub-text">{subHeader}</label>
        )}
      </div>
      <div id={`body-${id}`} className={`card-body collapse ${isCollapsed ? "" : "show"}`} aria-expanded={!isCollapsed}>
        {children}
      </div>
    </div>
  );
}
