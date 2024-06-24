import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaBus, FaBicycle, FaCar, FaTrain } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" color="brand.700">
          Mobility as a Service
        </Heading>
        <Text fontSize="xl" textAlign="center" color="gray.600">
          Seamless urban mobility solutions for the modern city dweller.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box p={4} textAlign="center">
            <FaBus size="3em" color="#2a69ac" />
            <Text mt={2}>Bus</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaBicycle size="3em" color="#2a69ac" />
            <Text mt={2}>Bicycle</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaCar size="3em" color="#2a69ac" />
            <Text mt={2}>Car</Text>
          </Box>
          <Box p={4} textAlign="center">
            <FaTrain size="3em" color="#2a69ac" />
            <Text mt={2}>Train</Text>
          </Box>
        </Flex>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;