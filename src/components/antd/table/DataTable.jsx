import { Table } from 'antd';

import './DataTable.scss';

function getTableWrapperClassname(className, applyTableBorder) {
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

  if (!applyTableBorder) {
    tableProps['bordered'] = true;
  }

  const tableWrapperClassname = getTableWrapperClassname(
    className,
    applyTableBorder,
  );

  return (
    <div className={`${tableWrapperClassname} list-table-hover`}>
      <Table {...tableProps} columns={columns} dataSource={rows} />
    </div>
  );
}
