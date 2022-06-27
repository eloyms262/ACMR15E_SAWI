import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { MdAssistantNavigation } from "react-icons/md";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import NavLink from "./nav-link";

export const navLinks = [
  { navName: "Home", link: "/" },
  { navName: "Projects", link: "/projects" },
  { navName: "Donate", link: "/donation" },
  { navName: "About", link: "/about" },
  { navName: "Partners", link: "/partners" },
  { navName: "Contact", link: "/contact" },
];
export default function MenuBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();

  useEffect(() => {
    onClose();

  }, [router.pathname])
  
  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="h-6 w-16 bg-[#D6EBF9] flex items-center justify-center rounded-xl"
      >
        <span className="text-menu font-roboto pr-1 text-menu-txt ">Menu</span>
        <HiMenu className="h-4 w-4" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="flex flex-row items-center justify-center">
            <DrawerCloseButton size={12} padding={11} />
            <Text className="text-green-700" fontSize="3xl">
              Navigation{" "}
            </Text>
            <MdAssistantNavigation className="h-10 w-8 ml-2 text-green-700" />
          </DrawerHeader>
          <DrawerBody className="flex flex-col items-center mt-16 space-y-3">
            {navLinks.map((e) => (
              <NavLink navName={e.navName} link={e.link} key={e.navName} />
            ))}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
