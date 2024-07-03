// CSS
import './App.scss';

// Pages
import WidePageLayout from './components/layouts/WidePageLayout.jsx';
import TwoColumnsLayout from './components/layouts/TwoColumnsLayout.jsx';
import ThreeColumnsLayout from './components/layouts/ThreeColumnsLayout.jsx';

/**
 * App Component
 */
export default function App() {
  return (
    <>
      {/* <WidePageLayout /> */}
      <TwoColumnsLayout />
      {/* <ThreeColumnsLayout /> */}
    </>
  );
}
