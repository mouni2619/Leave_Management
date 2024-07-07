// Components
// import Breadcrumb from '../breadcrumb/Breadcrumb';

// Page Components
function TitleSection({ body = '' }) {
  // if "body" is String then return :
  if (typeof body === 'string') {
    return (
      <h2 title={body} className="title text-truncate">
        {body}
      </h2>
    );
  }

  // returning component itself
  return <div>{body}</div>;
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
  breadcrumbList = [],
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
      <TitleSection body={title} />

      {/** Actions */}
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  );
}
