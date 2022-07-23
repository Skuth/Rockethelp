import { HStack, Text, Box, VStack, Circle, Icon, Pressable, IPressableProps, useTheme } from "native-base";
import { ClockAfternoon, Hourglass, CircleWavyCheck } from "phosphor-react-native"

interface OrderProps {
  id: string
  patrimony: string
  when: string
  status: "open" | "closed"
}

interface Props extends IPressableProps {
  data: OrderProps
}

const Order: React.FC<Props> = ({ data, ...rest }) => {
  const { colors } = useTheme()

  const statusColor =data.status === "open" ? colors.secondary[700] : colors.green[300]

  const OrderIcon = data.status === "closed" ? CircleWavyCheck : Hourglass

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColor} />
        
        <VStack
          flex={1}
          my={5}
          ml={5}
        >
          <Text color="white" fontSize="md">
            Patrimônio {data.patrimony}
          </Text>

          <HStack>
            <Icon as={<ClockAfternoon size={15} color={colors.gray[300]} />} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>
        
        <Circle
          bg="gray.500"
          h={12}
          w={12}
          mr={5}
        >
          <Icon as={<OrderIcon size={24} color={statusColor} />} />
        </Circle>
      </HStack>
    </Pressable>
  )
}

export { Order };
export type { OrderProps }