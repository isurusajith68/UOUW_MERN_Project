import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { CiCircleCheck } from "react-icons/ci";
import html2canvas from "html2canvas";
import React, { useState, useRef } from "react";
import qrdummy from "../assets/qrdummy.png";

const QrModal = ({ isOpen, onOpenChange, onOpen }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imgRef = useRef(null);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const downloadImage = () => {
    const element = document.getElementById("qr-data");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "QR_Data.png";
      link.click();
    });
  };

  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center gap-2">
                <CiCircleCheck size={50} color="green" />
                <div className="flex flex-row gap-5 bg-green-600 text-white py-2 px-5 rounded-lg">
                  <span className="text-lg">QR Code Generated</span>
                </div>
                <div className="flex flex-row gap-5">
                  <span className="">Download or Send the QR code</span>
                </div>
              </div>
              <Divider />
              <div
                id="qr-data"
                className="flex  gap-5 border-gray-600 border rounded-lg py-2 px-2"
              >
                <div className=" justify-start flex">
                  <Image
                    ref={imgRef}
                    src={qrdummy}
                    alt="QR Code"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className=" justify-start flex">
                  <div className="flex gap-2">
                    <div className="flex gap-3 flex-col text-sm">
                      <div className="font-semibold">Base Hospital</div>
                      <span>Name</span>
                      <span>NIC</span>
                      <span>Phone Number</span>
                      <span>Email</span>
                    </div>
                    <div className="flex gap-3 flex-col text-sm">
                      <div className="flex gap-2">
                        <span>:</span>
                        <div className="font-semibold">Kolonna</div>
                      </div>
                      <div className="flex gap-2">
                        <span>:</span>
                        <div className="">Nimal</div>
                      </div>
                      <div className="flex gap-2">
                        <span>:</span>
                        <div className="">23658745237v</div>
                      </div>
                      <div className="flex gap-2">
                        <span>:</span>
                        <div className="">081-1234567</div>
                      </div>
                      <div className="flex gap-2">
                        <span>:</span>
                        <div className="">nimal@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={isImageLoaded ? downloadImage : null}
                color="success"
                variant="solid"
                disabled={!isImageLoaded}
                onPress={onClose}
              >
                Download
              </Button>
              <Button color="primary" variant="solid">
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default QrModal;
