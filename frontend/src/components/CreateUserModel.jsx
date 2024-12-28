import React from 'react';
import { useDisclosure, Button} from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';

const CreateUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} color={"gray.300"} bg={"blackAlpha.500"} borderRadius={50} border={"2px solid rgb(0, 128, 128)"}>
                <BiAddToQueue size={20} />
            </Button>
            
        </>
    );
}

export default CreateUserModal;