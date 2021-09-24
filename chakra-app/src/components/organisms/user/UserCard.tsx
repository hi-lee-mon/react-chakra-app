import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, FC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo(
  ({ imageUrl, userName, fullName, onClick, id }) => {
    return (
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign="center">
          <Image
            boxSize="160px" // イメージのサイズ
            borderRadius="full" //丸にする
            src={imageUrl}
            alt={userName}
            m="auto" // 中央ぞろえ
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" fontWeight="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    );
  }
);
