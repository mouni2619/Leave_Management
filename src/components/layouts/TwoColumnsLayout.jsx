// Components
import Sidebar from './Sidebar.jsx';
import MainContent from './MainContent.jsx';

/**
 * Two Columns Layout
 */
export default function TwoColumnsLayout() {
  return (
    <div className="page">
      {/* Left sidebar */}
      <Sidebar width="w-25" sidebarHeading="Left Sidebar" />

      {/* Main content */}
      <MainContent columnLayout={2}>
        <div className="d-flex justify-content-center p-4">
          <h1>Main Content</h1>
        </div>
      </MainContent>
    </div>
  );
}
