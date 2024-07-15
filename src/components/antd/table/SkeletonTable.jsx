import { Skeleton, Table } from 'antd';

const KEY = 'key';

/**
 * Constructs Column placeholders
 * @param {*} columnCount: Number
 * @returns Array of column placholders to render loading skeleton
 */
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

  return columns.map((column) => {
    return {
      ...column,
      render: () => (
        <Skeleton
          key={column.dataIndex}
          title={true}
          paragraph={false}
          active={true}
        />
      ),
    };
  });
}

/**
 * Function to construct placeholders for rows
 * @param {*} rowCount: Number
 * @returns: Array of row placholders to render loading skeleton
 */
function constructDataSource(rowCount) {
  return [...Array(rowCount)].map((_, index) => ({
    key: `${KEY}${index}`,
  }));
}

export default function SkeletonTable({ columnCount, rowCount }) {
  return (
    <Table
      rowKey={KEY}
      pagination={false}
      dataSource={() => constructDataSource(rowCount)}
      columns={() => constructColumns(columnCount)}
    />
  );
}
