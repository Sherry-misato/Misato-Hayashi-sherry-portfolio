"use client";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Grid, Heading, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const personalItems = [
  ["Dance", "I enjoy learning through movement, and I traveled to Korea to take dance lessons."],
  ["Cafe Moments", "Latte art and quiet cafe time add a softer, more personal rhythm to my days."],
  ["Initiative", "When I become curious about something, I try to take action and learn through experience."],
  ["Qualifications", "Turkish Language Proficiency Test NE5 / Abacus Proficiency, 1st Dan."],
];

export default function PersonalPage() {
  return (
    <Box bg="#fffafb" color="ink" minH="100vh">
      <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.92)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text>
            </Link>
            <HStack spacing={{ base: 3, md: 7 }} fontSize="sm">
              <Link as={NextLink} href="/research">Research</Link>
              <Link as={NextLink} href="/activities">Activities</Link>
              <Link as={NextLink} href="/ja">Japanese</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 18 }}>
        <Link as={NextLink} href="/" color="rose.700" fontSize="sm"><ArrowBackIcon mr={2} />Home</Link>
        <Text mt={8} color="rose.700" fontSize="sm" letterSpacing=".12em">PERSONAL</Text>
        <Heading as="h1" mt={3} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.15" fontWeight="500">
          A Personal Side of Curiosity
        </Heading>
        <Text mt={7} maxW="860px" color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
          I want this portfolio to show not only what I study, but also the warmth, energy, and curiosity behind how I learn.
        </Text>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 18 }}>
        <Container maxW="6xl">
          <Grid templateColumns={{ base: "1fr", lg: "1.05fr .95fr" }} gap={6}>
            <Box position="relative" aspectRatio={4 / 3} overflow="hidden" borderRadius="8px" bg="rose.100">
              <Image src={assetPath("/photos/korea-dance.webp")} alt="Dance lesson in Korea" fill sizes="(max-width: 992px) 90vw, 48vw" style={{ objectFit: "cover", objectPosition: "center" }} />
            </Box>
            <Stack spacing={6}>
              <Box position="relative" aspectRatio={16 / 10} overflow="hidden" borderRadius="8px" bg="rose.100">
                <Image src={assetPath("/photos/now-latte.webp")} alt="Latte art at a cafe" fill sizes="(max-width: 992px) 90vw, 38vw" style={{ objectFit: "cover", objectPosition: "82% center" }} />
              </Box>
              <Box position="relative" aspectRatio={16 / 10} overflow="hidden" borderRadius="8px" bg="rose.100">
                <Image src={assetPath("/photos/now-dance.webp")} alt="Dance crew battle winner" fill sizes="(max-width: 992px) 90vw, 38vw" style={{ objectFit: "cover", objectPosition: "center" }} />
              </Box>
            </Stack>
          </Grid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 18 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
          {personalItems.map(([title, body]) => (
            <Box key={title} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={7}>
              <Heading as="h2" fontSize="xl" fontWeight="500">{title}</Heading>
              <Text mt={4} color="gray.700" lineHeight="1.9">{body}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
