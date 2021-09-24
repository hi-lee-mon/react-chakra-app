import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { memo, FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo(({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>名前</FormControl>
            <Input value="ほこり" isReadOnly />
            <FormControl>フルネーム</FormControl>
            <Input value="Hokori taro" isReadOnly />
            <FormControl>メール</FormControl>
            <Input value="test@gmail.com" isReadOnly />
            <FormControl>TEL</FormControl>
            <Input value="080-1111-2222" isReadOnly />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
