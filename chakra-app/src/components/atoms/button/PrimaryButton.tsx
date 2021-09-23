import { Button } from "@chakra-ui/button";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo(
  ({ children, disabled = false, loading = false, onClick }) => {
    return (
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        isLoading={loading}
        disabled={disabled || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
