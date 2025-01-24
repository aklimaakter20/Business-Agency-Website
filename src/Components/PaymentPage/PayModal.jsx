import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";
  
function PayModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <>
      <div className="w-[90%] mx-auto ">
      <Button onPress={onOpen} color="primary" className="w-[90%] rounded-lg p-2 mt-5">Book Tickets</Button>

      </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="px-6 py-8">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-start font-bold text-[#26395C] text-xl md:text-2xl">Thanks  For The Order</ModalHeader>
                <ModalBody className="text-start">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                    quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                    deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
               
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default PayModal