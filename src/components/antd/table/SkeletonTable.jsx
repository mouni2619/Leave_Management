import { Skeleton, Table } from 'antd';

const KEY = 'key';

function constructColumns(columnCount) {
  const columns = [];
  for (let i = 0; i <= columnCount; i++) {
    const eachColumn = {
      title: <Skeleton.Input active={true} />,
      width: 100,
      key: `${i}`,
      dataIndex: `${i}`,
    };
    columns.push(eachColumn);
  }
  return columns;
}

function columnPlaceholder(key) {
  return <Skeleton key={key} title={true} paragraph={false} active={true} />;
}

export default function SkeletonTable({ columnCount, rowCount }) {
  const columns = constructColumns(columnCount);
  return (
    <Table
      rowKey={KEY}
      pagination={false}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `${KEY}${index}`,
      }))}
      columns={columns.map((column) => {
        return {
          ...column,
          render: () => columnPlaceholder(column.dataIndex),
        };
      })}
    />
  );
}
