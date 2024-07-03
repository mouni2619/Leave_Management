import { useState } from 'react';

/**
 * Sidebar
 * @param {*} sidebarWidth : sidebar width
 *
 */
export default function Sidebar({
  sidebarWidth = 'w-25',
  sidebarPosition = 'left',
  sidebarHeading = '',
}) {
  // State
  const [selected, setSelected] = useState(0);

  // constants
  const sidebarContent = [
    { label: 'First', id: 0 },
    { label: 'Second', id: 1 },
    { label: 'Third', id: 2 },
    { label: 'Fourth', id: 3 },
    { label: 'Fifth', id: 4 },
  ];

  return (
    <aside className={`sidebar ${sidebarPosition} bg-light ${sidebarWidth}`}>
      {/* Heading */}
      {sidebarHeading && <h1>{sidebarHeading}</h1>}

      {/* Items */}
      <ul className="nav flex-column">
        {sidebarContent.map((info, i) => {
          const { label, id } = info;

          // active style
          const activeClassName = selected === id ? 'active' : '';

          return (
            <li
              key={i}
              role="presentation"
              className={`nav-item ${activeClassName}`}
              onClick={() => setSelected(id)}
            >
              {label} Item
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
