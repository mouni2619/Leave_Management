// Page Constants
const MAIN_CONTENT_WIDTH = {
  1: 'w-100',
  2: 'w-75',
  3: 'w-50 transform',
};

/**
 * Main Content
 */
export default function MainContent({ columnLayout = 1, children }) {
  // main content width according to column layout
  const mainContentWidth = MAIN_CONTENT_WIDTH[columnLayout];

  return (
    <main className={`main-content ${mainContentWidth}`}>
      <div className="content-wrapper">{children}</div>
    </main>
  );
}
