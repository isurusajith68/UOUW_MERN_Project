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

const NewXrayModal = ({ isOpen, onOpenChange }) => {
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
            <ModalHeader className="flex flex-col gap-1">New X-ray</ModalHeader>
            <form>
              <ModalBody>
                <div className="flex gap-5">
                <Textarea
                    label="X-Ray"
                    placeholder="Enter X-Ray"
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
export default NewXrayModal;
