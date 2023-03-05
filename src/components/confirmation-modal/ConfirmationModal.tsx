import { FC } from "react";
import { Button, Modal } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeConfirmationModal } from "../../redux/slices/confirmationModal";
import {
  maskStyles,
  reduxStoredFunctionMap,
} from "./ConfirmationModal.constants";

export const ConfirmationModal: FC = () => {
  const dispatch = useAppDispatch();
  const { data, isOpen } = useAppSelector((state) => state.confirmationModal);

  return (
    <>
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
              dispatch(reduxStoredFunctionMap[data.confirmActionName]());
              dispatch(closeConfirmationModal());
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
