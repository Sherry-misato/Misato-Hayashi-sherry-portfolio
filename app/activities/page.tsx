"use client";

import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Grid, Heading, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const activities = [
  {
    year: "2021",
    title: "2nd Place in a National Ballet Competition",
    text: "Received second place at the Toyama International Dance Competition.",
    href: "https://ballet-search.com/2021/11/23/toyama-dance2021/",
  },
  {
    year: "2023",
    title: "CanSat World Competition",
    text: "Won the national CanSat competition and represented Japan on the world stage.",
    href: "https://cansatcompetition.com/",
  },
  {
    year: "2024-2026",
    title: "SONY STEAM GIRLS EXPERIENCE",
    text: "Joined a scholarship-supported STEAM program focused on learning, mentoring, and passing curiosity on to the next generation.",
    href: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/",
  },
  {
    year: "2025",
    title: "Winner, Unitare DANCE TRACKS vol.2",
    text: "Won a crew battle and continued developing as a dancer through practice and lessons.",
    href: "/personal",
  },
];

const stories = [
  {
    label: "Interview",
    title: "High School Interview",
    text: "An interview about school life and student-led learning at Hosei Daini High School.",
    href: "https://hosei2.ed.jp/now/319/2022_05_31_2",
  },
  {
    label: "SGX",
    title: "SONY STEAM GIRLS EXPERIENCE at Hosei",
    text: "Coverage of SGX activities and the baton program.",
    href: "https://hosei2.ed.jp/now/319/3998",
  },
  {
    label: "SGX",
    title: "Hosei University Diversity Article",
    text: "A Hosei University article introducing SGX and related activities.",
    href: "https://www.hosei.ac.jp/diversity/info/article-20260624130223/",
  },
];

export default function ActivitiesPage() {
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
              <Link as={NextLink} href="/personal">Personal</Link>
              <Link as={NextLink} href="/ja">Japanese</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 12, md: 18 }}>
        <Link as={NextLink} href="/" color="rose.700" fontSize="sm"><ArrowBackIcon mr={2} />Home</Link>
        <Text mt={8} color="rose.700" fontSize="sm" letterSpacing=".12em">ACTIVITIES</Text>
        <Heading as="h1" mt={3} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.15" fontWeight="500">
          Achievements, Outreach, and Stories
        </Heading>
        <Text mt={7} maxW="860px" color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
          From ballet and CanSat to STEAM outreach, these experiences taught me to keep challenging myself and to communicate curiosity in ways that reach others.
        </Text>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 18 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">SELECTED HIGHLIGHTS</Text>
          <Stack spacing={0} mt={8} borderTop="1px solid" borderColor="rose.200">
            {activities.map((item) => (
              <Grid key={item.title} templateColumns={{ base: "1fr", md: "120px 1fr 150px" }} gap={5} py={6} borderBottom="1px solid" borderColor="rose.200">
                <Text color="rose.700" fontWeight="bold">{item.year}</Text>
                <Box>
                  <Heading as="h2" fontSize="xl" fontWeight="500">{item.title}</Heading>
                  <Text mt={2} color="gray.600" lineHeight="1.8">{item.text}</Text>
                </Box>
                <Link as={item.href.startsWith("/") ? NextLink : undefined} href={item.href} isExternal={!item.href.startsWith("/")} color="rose.700" fontWeight="bold" fontSize="sm">
                  View <ExternalLinkIcon mx="2px" />
                </Link>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 18 }}>
        <Text color="rose.700" fontSize="sm" letterSpacing=".12em">FEATURED STORIES</Text>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6} mt={8}>
          <Link href="https://www.youtube.com/watch?v=ntC2RwkO6Tc" isExternal _hover={{ textDecoration: "none" }}>
            <Box bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" overflow="hidden" h="100%">
              <Box position="relative" aspectRatio={16 / 9} bg="rose.100">
                <Image src="https://img.youtube.com/vi/ntC2RwkO6Tc/hqdefault.jpg" alt="HOSEI Museum interview thumbnail" fill sizes="(max-width: 992px) 90vw, 42vw" style={{ objectFit: "cover" }} />
              </Box>
              <Box p={6}>
                <Text color="rose.700" fontSize="xs" letterSpacing=".14em" fontWeight="bold">VIDEO</Text>
                <Heading as="h2" mt={3} fontSize="xl" fontWeight="500">HOSEI Museum Interview</Heading>
                <Text mt={3} color="gray.600" lineHeight="1.8">Appeared in a HOSEI Museum interview about university life, challenges, and learning.</Text>
              </Box>
            </Box>
          </Link>
          <Box bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" overflow="hidden" h="100%">
            <Box position="relative" aspectRatio={16 / 9} bg="rose.100">
              <Image src={assetPath("/photos/sgx-workshop.webp")} alt="SONY STEAM GIRLS EXPERIENCE workshop" fill sizes="(max-width: 992px) 90vw, 42vw" style={{ objectFit: "cover" }} />
            </Box>
            <Box p={6}>
              <Text color="rose.700" fontSize="xs" letterSpacing=".14em" fontWeight="bold">OUTREACH</Text>
              <Heading as="h2" mt={3} fontSize="xl" fontWeight="500">SGX Baton Program</Heading>
              <Text mt={3} color="gray.600" lineHeight="1.8">Shared STEAM learning with younger students through scholarship-supported outreach activities.</Text>
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={6}>
          {stories.map((story) => (
            <Link key={story.href} href={story.href} isExternal _hover={{ textDecoration: "none" }}>
              <Box bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={6} h="100%">
                <Text color="rose.700" fontSize="xs" letterSpacing=".14em" fontWeight="bold">{story.label}</Text>
                <Heading as="h3" mt={3} fontSize="lg" fontWeight="500">{story.title}</Heading>
                <Text mt={3} color="gray.600" lineHeight="1.8">{story.text}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
