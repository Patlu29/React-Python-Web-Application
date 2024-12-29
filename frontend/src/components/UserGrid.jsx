import { Grid } from "@chakra-ui/react";
import { USERS } from "../dummy/Dummy";
import UserCard from "./UserCard";

const UserGrid = () => {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}>
      {USERS.map((user) => (<UserCard key={user.id} user={user} name={user.name} role={user.role}/>))}
      </Grid>
  );
};

export default UserGrid;