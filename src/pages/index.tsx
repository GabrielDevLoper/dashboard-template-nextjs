import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Lottie from "react-lottie";
import animationData from "../assets/chat.json";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function SimpleCard() {
  return (
    <HStack spacing="-20">
      <MotionFlex
        w="100vw"
        h="75vh"
        alignItems="center"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <VStack>
          <Flex
            w="100%"
            maxW="500px"
            borderRadius={8}
            flexDir="column"
            align="center"
            mt={20}
          >
            <MotionFlex
              w="100vw"
              alignItems="center"
              justifyContent="center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Lottie options={defaultOptions} height={350} width={400} />
            </MotionFlex>
            <Stack align={"center"} p={2}>
              <Heading fontSize={"4xl"}>Chat - Online </Heading>
            </Stack>
          </Flex>
          <Flex
            as="form"
            w="100%"
            maxW="400px"
            p="8"
            borderRadius={8}
            boxShadow={"lg"}
            flexDir="column"
            bg={useColorModeValue("gray.200", "gray.700")}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  bg={useColorModeValue("gray.300", "gray.600")}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  bg={useColorModeValue("gray.300", "gray.600")}
                  placeholder="Senha"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Box></Box>
                  <Link passHref href="/createAccount" color={"blue.400"}>
                    Crie sua conta aqui
                  </Link>
                </Stack>
                <Link href="/dashboard">
                  <Button
                    bg={"#ae42fa"}
                    color={"white"}
                    _hover={{
                      bg: "#8514cc",
                    }}
                  >
                    Acessar
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
        </VStack>
      </MotionFlex>
    </HStack>
  );
}
