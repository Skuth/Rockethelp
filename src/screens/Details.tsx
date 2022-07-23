import { VStack, Text } from "native-base";
import { useRoute } from "@react-navigation/native";

import { Header } from "../components/Header";

type RouteParams = {
  orderId: string
}

const Details: React.FC = () => {
  const route = useRoute()

  const { orderId } = route.params as RouteParams

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="solicitação" />

      <Text color="white">
        {orderId}
      </Text>
    </VStack>
  )
}

export { Details };