import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  DatePicker
} from "@nextui-org/react";

const ClinicDateModal = ({ isOpen, onOpenChange }) => {
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
              Clinic Date
            </ModalHeader>
            <form>
              <ModalBody>
                <div className="flex gap-5">
                <DatePicker
                    autoFocus
                    label="Clinic Date"
                    variant="bordered"
                    showMonthAndYearPickers
                    isRequired
                    onChange={(date) => {
                      // setValue("dob", date);
                    }}
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
export default ClinicDateModal;
