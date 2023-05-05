import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeConfirmationModal } from "../../redux/slices/confirmationModal";
import {
  maskStyles,
  reduxStoredFunctionMap,
} from "./ConfirmationModal.constants";

interface IProps {
  onConfirm?: (actionType: string) => void;
}

export const ConfirmationModal: FC<IProps> = ({ onConfirm }) => {
  const dispatch = useAppDispatch();
  const { data, isOpen } = useAppSelector((state) => state.confirmationModal);

  return (
    <div className="ConfirmationModal">
      {isOpen && <div style={maskStyles} />}
      <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title>{data?.title}</Modal.Title>
        </Modal.Header>

        {data?.body && (
          <Modal.Body>
            <p>{data?.body}</p>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch(closeConfirmationModal())}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onConfirm?.(data.confirmActionName);
              dispatch(reduxStoredFunctionMap[data.confirmActionName]());
              dispatch(closeConfirmationModal());
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
