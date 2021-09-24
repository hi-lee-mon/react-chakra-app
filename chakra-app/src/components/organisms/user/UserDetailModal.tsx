import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { memo, FC, useState, useEffect, ChangeEvent } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

const onClickUpdate = () => alert("更新");

export const UserDetailModal: FC<Props> = memo(
  ({ isOpen, onClose, user, isAdmin = false }) => {
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
      setUserName(user?.username ?? "");
      setName(user?.name ?? "");
      setEmail(user?.email ?? "");
      setPhone(user?.phone ?? "");
    }, [user]);

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    };

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };

    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
    };

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
        motionPreset="slideInRight"
      >
        <ModalOverlay />
        <ModalContent p={2}>
          <ModalHeader>ユーザ詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>名前</FormControl>
              <Input
                value={userName}
                isReadOnly={!isAdmin}
                onChange={onChangeUserName}
              />
              <FormControl>フルネーム</FormControl>
              <Input
                value={name}
                isReadOnly={!isAdmin}
                onChange={onChangeName}
              />
              <FormControl>メール</FormControl>
              <Input
                value={email}
                isReadOnly={!isAdmin}
                onChange={onChangeEmail}
              />
              <FormControl>TEL</FormControl>
              <Input
                value={phone}
                isReadOnly={!isAdmin}
                onChange={onChangePhone}
              />
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    );
  }
);
