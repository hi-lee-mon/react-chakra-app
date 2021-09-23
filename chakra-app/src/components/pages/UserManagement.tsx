import { Image } from "@chakra-ui/image";
import { Box, Stack, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { memo, FC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="ほこり"
          fullName="hokori taro"
        />
      </WrapItem>
    </Wrap>
  );
});
