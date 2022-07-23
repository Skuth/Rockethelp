import { useState } from "react";
import { VStack, HStack, IconButton, Icon, Heading, Text, FlatList, Center, useTheme } from "native-base";
import { SignOut, ChatTeardropText } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { Filter } from "../components/Filter";
import { Order, OrderProps } from "../components/Order";
import { Button } from "../components/Button";

import Logo from "../assets/logo_secondary.svg"

const Home: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open")
  const [orders, setOrgers] = useState<OrderProps[]>([
    {
      id: "123",
      patrimony: "123456",
      when: "18/07/2022 às 10:00",
      status: "open"
    },
    {
      id: "23412",
      patrimony: "31231",
      when: "18/07/2022 às 10:00",
      status: "closed"
    }
  ])

  const handleNewOrder = () => {
    navigation.navigate("new")
  }

  const handleOpenDetails = (orderId: string) => {
    navigation.navigate("details", { orderId })
  }

  return  (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={
            <Icon
              as={
                <SignOut size={26} color={colors.gray[300]} />
              }
            />
          }
        />
      </HStack>

      <VStack flex={1} p={6}>
        <HStack
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={8}
          mb={4}
        >
          <Heading color="gray.100">
            Solicitações
          </Heading>
          <Text color="gray.200">
            {orders.length}
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            isActive={statusSelected === "open"}
            onPress={() => setStatusSelected("open")}
          />

          <Filter
            type="closed"
            title="finalizados"
            isActive={statusSelected === "closed"}
            onPress={() => setStatusSelected("closed")}
          />
        </HStack>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100
          }}
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Order data={item} onPress={() => handleOpenDetails(item.id)} />
          )}
          ListEmptyComponent={() => (
            <Center>
              <Icon
                as={<ChatTeardropText size={40} color={colors.gray[300]} />}
              />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {"\n"}
                solicitações {statusSelected === "open" ? "em andamento" : "finalizadas"}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  )
}

export { Home };