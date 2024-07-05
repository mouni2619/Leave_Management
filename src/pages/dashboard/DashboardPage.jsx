import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom/dist';

// Components
import PageHeader from '../../components/layouts/PageHeader';

/**
 * Dashboard Page
 */
export default function DashboardPage() {
  // Outlet Context
  const [setHeaderComponent] = useOutletContext();

  // useEffect to update Page Header for specific pages
  useEffect(() => {
    setHeaderComponent(<PageHeader title="Page Header" />);
  }, []);

  return (
    <div className="page-content">
      <h1>Dashboard Page</h1>
    </div>
  );
}
