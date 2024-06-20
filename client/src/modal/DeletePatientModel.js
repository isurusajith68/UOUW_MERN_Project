import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const DeletePatientModel = ({
  isOpen,
  onOpenChange,
  selectedPatientId,
  setSelectedPatientId,
}) => {
  const deletePatient = () => {
    console.log(selectedPatientId);
    onOpenChange();
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete Patient
            </ModalHeader>
            <ModalBody>
              <div>
                if you delete this patient, all the information will be lost
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="success" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="danger" variant="light" onClick={deletePatient}>
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default DeletePatientModel;
