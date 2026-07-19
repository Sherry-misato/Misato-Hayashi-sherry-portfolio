"use client";

import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const lifeMapItems = [
  ["01 Care", "My beloved grandfather", "His passing made health feel deeply personal and shaped my interest in prevention."],
  ["02 Body", "Ballet and the microbiome", "Ballet led me to think about diet, the body, and the hidden influence of gut bacteria."],
  ["03 Technology", "Engineering and AI", "CanSat and applied informatics taught me how technology can turn questions into tools."],
  ["04 Voice", "STEAM outreach", "Through SGX, I learned to communicate science and pass curiosity on to younger students."],
];

const achievements = [
  ["2021", "2nd Place in a National Ballet Competition", "Toyama International Dance Competition.", "https://ballet-search.com/2021/11/23/toyama-dance2021/"],
  ["2023", "CanSat World Competition", "Won the national CanSat competition and represented Japan internationally.", "https://cansatcompetition.com/"],
  ["2024-2026", "SONY STEAM GIRLS EXPERIENCE", "A scholarship-supported program for women in STEM and the next generation.", "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/"],
  ["2025", "Winner, Unitare DANCE TRACKS vol.2", "Won a crew battle and traveled to Korea to take dance lessons.", "/details#dance"],
];

export default function EnglishPage() {
  return (
    <Box bg="#fffafb" color="ink">
      <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.9)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text>
            </Link>
            <HStack spacing={{ base: 4, md: 7 }} fontSize="sm">
              <Link as={NextLink} href="/ja">Japanese</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 14, md: 22 }} pb={{ base: 16, md: 24 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.2fr .8fr" }} gap={{ base: 12, lg: 16 }} alignItems="center">
          <Box>
            <Badge bg="rose.100" color="rose.700" px={3} py={1} borderRadius="4px">English Profile</Badge>
            <Heading as="h1" mt={6} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.2" fontWeight="500">
              Misato Hayashi
            </Heading>
            <Text mt={5} color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
              Third-year undergraduate student in Applied Informatics at Hosei University, Iyatomi Laboratory.
            </Text>
            <Heading as="p" mt={9} fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.5" fontWeight="500">
              Extending healthy years through medical AI and microbiome research.
            </Heading>
            <Text mt={6} maxW="760px" color="gray.700" lineHeight="2">
              Inspired by my beloved grandfather&apos;s experience with illness, I became interested in preventive healthcare: supporting people before symptoms become severe. My work and interests connect gut microbiome data, medical AI, and future computing technologies.
            </Text>
            <Button as="a" href="mailto:hayashimisato1@gmail.com" mt={8} rightIcon={<ArrowForwardIcon />} bg="rose.700" color="white" _hover={{ bg: "rose.500" }}>
              Contact Me
            </Button>
          </Box>
          <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="8px" bg="rose.100">
            <Image src={assetPath("/photos/profile-misato.webp")} alt="Portrait of Misato Hayashi" fill priority sizes="(max-width: 992px) 88vw, 34vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </Box>
        </Grid>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">INTRODUCTION</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Biography</Heading>
          <Text mt={7} maxW="900px" color="gray.800" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
            I study medical AI and applied informatics at Hosei University. Through ballet, engineering competitions, STEAM outreach, and international experiences, I have learned to turn curiosity into action. The center of my interests is simple: helping people live healthier for longer.
          </Text>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 16, md: 24 }}>
        <Text color="rose.700" fontSize="sm" letterSpacing=".12em">LIFE MAP</Text>
        <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Experiences Connected by One Theme</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={10}>
          {lifeMapItems.map(([label, title, body]) => (
            <Box key={label} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={7}>
              <Text color="rose.700" fontSize="xs" letterSpacing=".12em" fontWeight="bold">{label}</Text>
              <Heading as="h2" mt={3} fontSize="xl" fontWeight="500">{title}</Heading>
              <Text mt={4} color="gray.700" lineHeight="1.9">{body}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box mt={8} bg="rose.50" border="1px solid" borderColor="rose.200" borderRadius="8px" p={{ base: 7, md: 9 }} textAlign="center">
          <Text color="rose.700" fontSize="xs" letterSpacing=".16em" fontWeight="bold">CENTER</Text>
          <Heading mt={3} fontSize={{ base: "2xl", md: "4xl" }} fontWeight="500">Extend Healthy Years</Heading>
          <Text mt={4} color="gray.600">Every experience points back to preventive healthcare and medical AI.</Text>
        </Box>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 16, md: 22 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">ACHIEVEMENTS</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Selected Highlights</Heading>
          <Stack spacing={0} mt={9} borderTop="1px solid" borderColor="rose.200">
            {achievements.map(([year, title, body, url]) => (
              <Grid key={title} templateColumns={{ base: "1fr", md: "90px 1fr 180px" }} gap={5} py={6} borderBottom="1px solid" borderColor="rose.200">
                <Text color="rose.700" fontWeight="bold">{year}</Text>
                <Box>
                  <Heading as="h3" fontSize="xl" fontWeight="500">{title}</Heading>
                  <Text mt={2} color="gray.600" lineHeight="1.8">{body}</Text>
                </Box>
                <Link href={url} isExternal={!url.startsWith("/")} color="rose.700" fontWeight="bold" fontSize="sm">
                  View <ExternalLinkIcon mx="2px" />
                </Link>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container id="contact" maxW="6xl" py={{ base: 14, md: 18 }}>
        <Text color="rose.700" fontSize="sm" letterSpacing=".12em">CONTACT</Text>
        <Heading mt={3} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Contact and Affiliation</Heading>
        <Stack spacing={0} mt={8} borderTop="1px solid" borderColor="rose.200">
          {[
            ["Email", "hayashimisato1@gmail.com"],
            ["Campus", "3-7-2 Kajino-cho, Koganei-shi, Tokyo 184-8584, Japan"],
            ["Affiliation", "Department of Applied Informatics, Hosei University / Iyatomi Laboratory"],
          ].map(([label, value]) => (
            <Grid key={label} templateColumns={{ base: "1fr", sm: "140px 1fr" }} gap={3} py={5} borderBottom="1px solid" borderColor="rose.200">
              <Text color="rose.700" fontWeight="bold">{label}</Text>
              <Text color="gray.700">{value}</Text>
            </Grid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
