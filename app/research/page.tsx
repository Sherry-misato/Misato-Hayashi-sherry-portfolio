"use client";

import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Container, Flex, Grid, Heading, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const researchIntroJa =
  "\u5065\u5eb7\u5bff\u547d\u3092\u4f38\u3070\u3059\u3053\u3068\u3092\u4e2d\u5fc3\u306b\u3001\u533b\u7642AI\u3001\u8178\u5185\u7d30\u83cc\u3001\u4e88\u9632\u533b\u7642\u3078\u306e\u95a2\u5fc3\u3092\u3064\u306a\u3052\u3066\u5b66\u3093\u3067\u3044\u307e\u3059\u3002";

const themes = [
  ["Care", "My beloved grandfather", "His illness and passing made health feel personal, not abstract."],
  ["Body", "Ballet and the microbiome", "Ballet led me to think about diet, the body, and the hidden influence of gut bacteria."],
  ["Technology", "Medical AI", "Applied informatics showed me how data and models can become tools for care."],
  ["Global", "Working across borders", "I want to grow into someone who can contribute in international research environments."],
];

export default function ResearchPage() {
  return (
    <Box bg="#fffafb" color="ink" minH="100vh">
      <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.92)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text>
            </Link>
            <HStack spacing={{ base: 3, md: 7 }} fontSize="sm">
              <Link as={NextLink} href="/activities">Activities</Link>
              <Link as={NextLink} href="/personal">Personal</Link>
              <Button as={NextLink} href="/ja" size="sm" variant="outline" borderColor="rose.300" color="rose.700" _hover={{ bg: "rose.50" }}>
                {"\u65e5\u672c\u8a9e / JA"}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 18 }}>
        <Link as={NextLink} href="/" color="rose.700" fontSize="sm"><ArrowBackIcon mr={2} />Home</Link>
        <Badge mt={8} bg="rose.100" color="rose.700" px={3} py={1} borderRadius="4px">Research</Badge>
        <Heading as="h1" mt={5} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.15" fontWeight="500">
          Medical AI for Healthy Longevity
        </Heading>
        <Text mt={7} maxW="900px" color="gray.800" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
          My research interests focus on healthy longevity, especially through medical AI, microbiome data, and preventive healthcare. I hope to help people understand changes in their bodies earlier, before small signs become serious problems.
        </Text>
        <Text mt={4} maxW="900px" color="gray.600" lineHeight="2">
          {researchIntroJa}
        </Text>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 18 }}>
        <Container maxW="6xl">
          <Grid templateColumns={{ base: "1fr", lg: ".85fr 1.15fr" }} gap={{ base: 8, lg: 12 }} alignItems="start">
            <Box bg="#fffafb" border="1px solid" borderColor="rose.200" borderRadius="8px" p={{ base: 7, md: 9 }}>
              <Text color="rose.700" fontSize="xs" letterSpacing=".16em" fontWeight="bold">CENTER</Text>
              <Heading mt={4} fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1.25" fontWeight="500">
                Healthy Longevity
              </Heading>
              <Text mt={5} color="gray.700" lineHeight="2">
                Different experiences shaped the same question: how can technology help people stay well for longer?
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={5}>
              {themes.map(([label, title, body]) => (
                <Box key={label} bg="#fffafb" border="1px solid" borderColor="rose.200" borderRadius="8px" p={6}>
                  <Text color={label === "Technology" ? "teal.700" : "rose.700"} fontSize="xs" letterSpacing=".14em" fontWeight="bold">{label}</Text>
                  <Heading as="h2" mt={3} fontSize="xl" fontWeight="500" lineHeight="1.35">{title}</Heading>
                  <Text mt={4} color="gray.700" lineHeight="1.8">{body}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Grid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 18 }}>
        <Text color="rose.700" fontSize="sm" letterSpacing=".12em">FOCUS</Text>
        <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Current Interests</Heading>
        <Stack mt={8} spacing={5}>
          {[
            ["Medical AI", "Using data-driven approaches to support diagnosis, prevention, and care."],
            ["Gut Microbiome", "Exploring how microbiome information may relate to health, diet, and the body."],
            ["Applied Informatics", "Building a foundation in programming, statistics, and machine learning for medical research."],
            ["Future Direction", "Developing the skills to work across borders and contribute to global research communities."],
          ].map(([title, body]) => (
            <Grid key={title} templateColumns={{ base: "1fr", md: "220px 1fr" }} gap={5} py={5} borderBottom="1px solid" borderColor="rose.200">
              <Heading as="h2" fontSize="xl" fontWeight="500">{title}</Heading>
              <Text color="gray.700" lineHeight="1.9">{body}</Text>
            </Grid>
          ))}
        </Stack>
        <Button as="a" mt={10} href="https://iyatomi-lab.info/" target="_blank" rel="noreferrer" rightIcon={<ExternalLinkIcon />} size="lg" bg="rose.700" color="white" _hover={{ bg: "rose.500" }}>
          Iyatomi Laboratory
        </Button>
      </Container>
    </Box>
  );
}
