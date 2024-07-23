// Components
import Chart from './Chart';

/**
 * Chart Types
 */
export default function ChartTypes({ data = {} }) {
  return (
    <div className="row me-5">
      {Object.keys(data).map((eachKey) => {
        const { traces = {}, layout = {} } = data[eachKey];

        // Constructing array of traces
        const chartData = Object.values(traces);

        return (
          <div className="col-6" key={eachKey}>
            <Chart data={chartData} layout={layout} />
          </div>
        );
      })}
    </div>
  );
}
