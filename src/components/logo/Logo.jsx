import { Link } from 'react-router-dom';

/**
 * Logo Component
 * @param {*} className : Container Class Name
 * @param {*} imageURL : Image url
 * @param {*} imageHeight : Image height
 * @param {*} redirect : Boolean value
 * @param {*} redirectURL : Redirect Page Url
 */
export default function Logo({
  className = '', //
  imageURL = '',
  imageHeight = 30,
  redirect = false,
  redirectURL,
}) {
  // If there is no image
  if (!imageURL) {
    return null;
  }

  return (
    <div className={className}>
      <Link
        className="d-block"
        to={redirect ? redirectURL : 'javascript:void(0);'}
      >
        <img src={imageURL} alt="Logo" height={imageHeight} />
      </Link>
    </div>
  );
}
