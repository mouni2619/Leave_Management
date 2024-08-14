import { Table } from 'antd';

import './DataTable.scss';

function getTableWrapperClassName(className, applyTableBorder) {
  return applyTableBorder ? `${className} custom-table-wrapper` : className;
}

export default function DataTable({
  rows,
  columns,
  scrollConfig = {},
  className = '',
  applyTableBorder = false,
}) {
  const tableProps = {
    size: 'large',
    showHeader: true,
    showSorterTooltip: false,
    pagination: false,
    scroll: scrollConfig,
  };

  if (applyTableBorder) {
    tableProps['bordered'] = true;
  }

  const tableWrapperClassName = getTableWrapperClassName(
    className,
    applyTableBorder,
  );

  return (
    <div className={`${tableWrapperClassName} list-table-hover`}>
      <Table {...tableProps} columns={columns} dataSource={rows} />
    </div>
  );
}
