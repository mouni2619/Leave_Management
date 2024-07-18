// Sections
import SampleCharts from './sample-charts/SampleCharts';

/**
 * Components Page
 */
export default function ComponentsPage() {
  return (
    <div className="content-wrapper">
      <div className="page-content">
        <h3 className="text-center fw-semibold">Components</h3>

        {/* Sample Charts */}
        <SampleCharts />
      </div>
    </div>
  );
}
