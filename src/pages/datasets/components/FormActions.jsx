import { Form, Space } from 'antd';

// Constants
import { DATASET_MODAL_TYPES } from '../../../constants/datasetConstants';

// Components
import Button from '../../../components/button/Button';

/**
 * Form Actions
 * @param {*} handleReset: Function
 * @param {*} handleSubmit: Function
 * @param {*} btnLoading: Boolean
 * @param {*} type: String
 * @returns
 */

export default function FormActions({
  handleReset = () => {},
  handleSubmit = () => {},
  btnLoading = false,
  type = DATASET_MODAL_TYPES.DATA,
}) {
  const isDeleteForm = type === DATASET_MODAL_TYPES.DELETE;

  if (isDeleteForm) {
    return (
      <Form.Item className="d-flex flex-row justify-content-end align-items-center mb-0">
        <Space>
          <Button
            className="btn-primary"
            onClick={handleSubmit}
            loading={btnLoading}
          >
            Confirm
          </Button>
        </Space>
      </Form.Item>
    );
  }
  return (
    <Form.Item className="d-flex flex-row justify-content-end align-items-center">
      <Space>
        <Button
          className="btn-outline-dark btn-outline-custom"
          onClick={handleReset}
        >
          Reset
        </Button>
        <Button
          className="btn-primary"
          onClick={handleSubmit}
          loading={btnLoading}
        >
          Submit
        </Button>
      </Space>
    </Form.Item>
  );
}
