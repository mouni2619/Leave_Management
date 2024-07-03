// Components
import MainContent from './MainContent.jsx';

/**
 * Wide Page Layout
 */
export default function WidePageLayout() {
  return (
    <div className="page">
      {/* Main content */}
      <MainContent>
        <div className="d-flex justify-content-center p-4">
          <h1>Wide Page Layout : Main Content</h1>
        </div>
      </MainContent>
    </div>
  );
}
