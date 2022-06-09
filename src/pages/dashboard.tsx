import { ReactNode } from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export default function Dashboard() {
  return (
    <>
      <Header />
      <MotionFlex
        p={4}
        mt={4}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Main Content Here
      </MotionFlex>
    </>
  );
}
