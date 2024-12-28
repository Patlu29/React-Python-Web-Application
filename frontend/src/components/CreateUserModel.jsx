import { Button } from "@chakra-ui/react"
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModel = () => {

    return (
        <>
            <Button leftIcon={<BiAddToQueue />}>
                Add User
            </Button>
        </>
    );
}


export default CreateUserModel