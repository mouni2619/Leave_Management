// Components
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';
import SidebarChildren from './SidebarChildren.jsx';

/**
 * Two Columns Layout
 */
export default function TwoColumnsLayout() {
  return (
    <div className="page">
      {/* Left sidebar */}
      <Sidebar>
        <SidebarChildren />
      </Sidebar>

      {/* Main content */}
      <MainContent columnLayout={2}>
        <div className="text-center p-4">
          <h1>Main Content</h1>
        </div>
      </MainContent>
    </div>
  );
}
