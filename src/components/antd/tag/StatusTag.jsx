import { Tag } from 'antd';

// Constants
import { STATUS, TAG_COLOR } from '../../../constants/generalConstants';

/**
 * Status Tag Component
 * @param {*} isActive : Boolean
 * @returns
 */
export default function StatusTag({ isActive = false }) {
  const statusText = isActive ? STATUS.ACTIVE : STATUS.IN_ACTIVE;
  const tagColor = isActive ? TAG_COLOR.GREEN : TAG_COLOR.RED;

  return (
    <div className="tag-wrapper d-flex justify-content-center">
      <Tag
        color={tagColor}
        className={`d-flex justify-content-center align-items-center w-100`}
      >
        {statusText}
      </Tag>
    </div>
  );
}
