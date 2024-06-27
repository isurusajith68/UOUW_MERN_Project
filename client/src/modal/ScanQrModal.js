import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";

import { toast } from "react-hot-toast";
import QRScanner from "../components/QRScanner";

const ScanQrModal = ({ isOpen, onOpenChange, setDatac }) => {
  const [loading, setLoading] = useState(false);

  const handleScan = (data) => {
    fetchPatientData(data);
  };

  const fetchPatientData = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/patients/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 404) {
        toast.error("Patient not found.");
      } else if (response.status === 200) {
        const data = await response.json();
        const ticket = data.patient;
        setDatac(ticket);
        toast.success("Successfully retrieved patient.");
        onOpenChange(false);
      }
    } catch (error) {
      console.error("Error retrieving patient:", error);
      toast.error("Failed to retrieve patient.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      size="sm"
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
              Scan QR Code
            </ModalHeader>
            <ModalBody>
              {loading ? (
                <Spinner type="spinner" size="lg" />
              ) : (
                <QRScanner onScan={handleScan} />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" auto onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ScanQrModal;
