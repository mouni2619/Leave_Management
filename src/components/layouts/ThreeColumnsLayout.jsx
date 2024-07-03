// Components
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';

/**
 * Three Columns Layout
 */
export default function ThreeColumnsLayout() {
  return (
    <div className="page">
      {/* Left sidebar */}
      <Sidebar width="w-25" sidebarHeading="Left Sidebar" />

      {/* Main content */}
      <MainContent columnLayout={3}>
        <div className="text-center p-4">
          <h1>Main Content</h1>
        </div>
      </MainContent>

      {/* Right sidebar */}
      <Sidebar
        width="w-25"
        sidebarPosition="right"
        sidebarHeading="Right Sidebar"
      />
    </div>
  );
}
