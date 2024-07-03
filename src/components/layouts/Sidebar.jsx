/**
 * Sidebar
 * @param {*} sidebarWidth : sidebar width
 *
 */
export default function Sidebar({
  children,
  sidebarWidth = 'w-25',
  sidebarPosition = 'left',
}) {
  return (
    <aside className={`sidebar ${sidebarPosition} bg-light ${sidebarWidth}`}>
      {/* Children */}
      {children}
    </aside>
  );
}
