import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea
} from "@nextui-org/react";

const AddNewRecordModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal
      size="lg"
      placement="top-center"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Add prescription
            </ModalHeader>
            <form>
              <ModalBody>
                <div className="flex gap-5">
                  {/* <Input
                    autoFocus
                    label="First Name"
                    placeholder="Enter your first name"
                    variant="bordered"
                  /> */}

                  <Textarea
                    autoFocus
                    label="Address"
                    placeholder="Enter address"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light">
                  Clear
                </Button>
                <Button color="primary" type="submit">
                  Register
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default AddNewRecordModal;
