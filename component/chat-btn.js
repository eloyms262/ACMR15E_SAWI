import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import { BsEnvelopeFill } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ChatButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      className="h-12 w-12 flex justify-center items-center rounded-full bg-[#F0DE3E] p-2 fixed right-4 bottom-4 lg:h-16 lg:w-16 lg:right-10 lg:bottom-10"
      onClick={onOpen}
    >
      <BsFillChatSquareDotsFill className="lg:h-10 lg:w-10 h-7 w-10" />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className="m-5 px-8 py-5 flex flex-col text-sm border border-[#EEEEEE] bg-[#E5E5BC] gap-2 lg:rounded-xl lg:text-xl">
              <label className="w-full">
                <span className="font-thin">Name</span>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="mt-1 px-2 py-1 w-full rounded-md"
                />
              </label>
              <label className="w-full mt-3">
                <span className="font-thin">Email Address</span>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="mt-1 px-2 py-1 w-full rounded-md"
                />
              </label>
              <label className="w-full mt-3">
                <span className="font-thin">Message</span>
                <textarea
                  placeholder="Enter your message"
                  className="mt-1 px-2 py-1 w-full rounded-md h-40 lg:h-20"
                ></textarea>
              </label>
            </form>
          </ModalBody>

          <ModalFooter className="flex flex-row gap-1">
            <div
              className="flex justify-center items-center sm:flex-row p-2 rounded-lg  bg-[#52A511] hover:bg-[#44890f] text-white transition ease-linear duration-100 w-1/2 md:h-10 md:rounded-lg lg:bg-red-500"
              onClick={onClose}
            >
              Close
            </div>
            <div className="flex justify-center items-center sm:flex-row p-2 rounded-lg  bg-[#52A511] hover:bg-[#44890f] text-white transition ease-linear duration-100 w-1/2 md:h-10 md:rounded-lg lg:bg-red-500">
              <BsEnvelopeFill className="h-4 w-4 md:h-6 md:w-6 mr-4" /> Send
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
