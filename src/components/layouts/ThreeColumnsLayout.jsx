// Components
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import SidebarChildren from './SidebarChildren.jsx';

/**
 * Three Columns Layout
 */
export default function ThreeColumnsLayout() {
  return (
    <div className="page">
      {/* Left sidebar */}
      <Sidebar>
        <SidebarChildren />
      </Sidebar>

      {/* Main content */}
      <MainContent columnLayout={3}>
        <div className="text-center p-4">
          <h1>Main Content</h1>
        </div>
      </MainContent>

      {/* Right sidebar */}
      <Sidebar sidebarPosition="right">
        <SidebarChildren />
      </Sidebar>
    </div>
  );
}
