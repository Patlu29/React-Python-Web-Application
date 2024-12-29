import {
  Input,
  Stack,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "./ui/radio"
import { BiAddToQueue } from "react-icons/bi";
import { Button } from "./ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer.jsx";
import { useRef } from "react";

function CreateUserModal() {
  const ref = useRef(null);

  return (
    <DrawerRoot initialFocusEl={() => ref.current} placement="top" size="sm">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          borderRadius={20}
          border="2px solid rgb(0, 128, 128)"
          bg={{ base: "black", _light: "white" }}
          color={{ base: "white", _light: "gray.800" }}
        >
          <BiAddToQueue size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        width="550px"
        height="400px"
        style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <DrawerHeader>
          <DrawerTitle> Add New Friend 😍 </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Stack mt="5">
            <Input placeholder="Full Name" />
            <Input ref={ref} placeholder="Role" />
            <Input
              as="textarea"
              ref={ref}
              placeholder="Description"
              height="80px"
            />
            <RadioGroup defaultValue="1">
              <HStack gap="6">
                <Radio value="1">Male</Radio>
                <Radio value="2">Female</Radio>
                <Radio value="3">Others</Radio>
              </HStack>
            </RadioGroup>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerActionTrigger>
          <Button>Add</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default CreateUserModal;
