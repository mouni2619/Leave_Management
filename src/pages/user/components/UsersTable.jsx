// Components
import DataTable from '../../../components/antd/table/DataTable';

export default function UsersTable({ rows = [], columns = [] }) {
  return <DataTable rows={rows} columns={columns} applyTableBorder={true} />;
}
