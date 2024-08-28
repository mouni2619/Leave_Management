import { Table } from 'antd';

import './DataTable.scss';

function getTableWrapperClassName(className, applyOnlyTableBorder) {
  return applyOnlyTableBorder ? `${className} custom-table-wrapper` : className;
}

export default function DataTable({
  rows,
  columns,
  scrollConfig = {},
  className = '',
  applyOnlyTableBorder = false,
}) {
  const tableProps = {
    size: 'large',
    showHeader: true,
    showSorterTooltip: false,
    pagination: false,
    scroll: scrollConfig,
  };

  if (!applyOnlyTableBorder) {
    tableProps['bordered'] = true;
  }

  const tableWrapperClassName = getTableWrapperClassName(
    className,
    applyOnlyTableBorder,
  );

  return (
    <div className={`${tableWrapperClassName} list-table-hover`}>
      <Table {...tableProps} columns={columns} dataSource={rows} />
    </div>
  );
}
