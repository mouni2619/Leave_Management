// Components
// import Breadcrumb from '../breadcrumb/Breadcrumb';

// Page Components
function TitleSection({ title = '' }) {
  // if "title" is String then return :
  if (typeof title === 'string') {
    return (
      <h2 title={title} className="title text-truncate">
        {title}
      </h2>
    );
  }

  // returning component itself
  return <div>{title}</div>;
}

/**
 * Page Header
 * @param {*} title : Title to be displayed
 * @param {*} actions : To display buttons
 * @param {*} shadow : Boolean value
 * @param {*} border : Boolean value
 * @param {*} breadcrumbList : Array for breadcrumbs
 * @param {*} className
 */
export default function PageHeader({
  title,
  actions,
  shadow = false,
  border = false,
  // breadcrumbList = [],
  className = '',
}) {
  // Props
  const shadowCls = shadow ? 'shadow' : '';
  const borderCls = border ? 'border' : '';

  return (
    <div className={`page-header ${shadowCls} ${borderCls} ${className}`}>
      {/* TODO :: Breadcrumb */}
      {/* {breadcrumbList.length !== 0 && <Breadcrumb items={breadcrumbList} />} */}

      {/** Title */}
      <TitleSection title={title} />

      {/** Actions */}
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  );
}
