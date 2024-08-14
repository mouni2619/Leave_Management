// Components
import DataTable from '../../../components/antd/table/DataTable';

const rows = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function Header() {
  return <h3 className="my-4">AntD Table Component</h3>;
}

export default function AntdTablePage() {
  return (
    <div className="page-content">
      <Header />
      <DataTable rows={rows} columns={columns} applyTableBorder={true} />
    </div>
  );
}
