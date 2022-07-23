import { Button as NativeButton, IButtonProps, Heading } from "native-base";

interface ButtonProps extends IButtonProps {
  title: String
}

const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
  return (
    <NativeButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading color="white" fontSize="md">
        {title}
      </Heading>
    </NativeButton>
  )
}

export { Button };