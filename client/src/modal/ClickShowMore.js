import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

const ClickShowMore = ({ isOpen, onOpenChange, patient }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Patient Information
            </ModalHeader>
            <ModalBody>
              <div className="flex  gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-5">
                    <span className="text-gray-900">Name</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">ID Number</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">Date of Birth</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">Phone Number</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">Emailr</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">Address</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-900">Blood group</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">
                      {patient.firstName + " " + patient.lastName}
                    </span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.idNumber}</span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.dob}</span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.phoneNumber}</span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.email}</span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.address}</span>
                  </div>
                  <div className="flex  gap-1">
                    <span className="text-gray-500">:</span>
                    <span className="text-gray-500">{patient.bloodGroup}</span>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ClickShowMore;
