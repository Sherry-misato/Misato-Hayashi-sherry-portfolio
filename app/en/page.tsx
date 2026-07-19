"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
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
const japaneseName = "\u6797 \u7f8e\u8061";
const japaneseIntro =
  "\u6cd5\u653f\u5927\u5b66\u7b2c\u4e8c\u9ad8\u7b49\u5b66\u6821\u51fa\u8eab\u3002\u73fe\u5728\u306f\u6cd5\u653f\u5927\u5b66\u7406\u5de5\u5b66\u90e8\u5fdc\u7528\u60c5\u5831\u5de5\u5b66\u79d1\u306e\u5b66\u90e83\u5e74\u3068\u3057\u3066\u3001\u5f4c\u51a8\u7814\u7a76\u5ba4\u3067\u5b66\u3093\u3067\u3044\u307e\u3059\u3002";

const pages = [
  {
    label: "Research",
    title: "Medical AI and Healthy Longevity",
    body: "My academic interests, research motivation, and future direction.",
    href: "/research",
  },
  {
    label: "Activities",
    title: "Competitions, Outreach, and Interviews",
    body: "Selected achievements, articles, official links, and media appearances.",
    href: "/activities",
  },
  {
    label: "Personal",
    title: "Dance, Cafe Moments, and Curiosity",
    body: "The personal side of my portfolio: movement, learning, and small joys.",
    href: "/personal",
  },
];

export default function EnglishPage() {
  return (
    <Box bg="#fffafb" color="ink">
      <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.92)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text>
            </Link>
            <HStack spacing={{ base: 3, md: 7 }} fontSize="sm">
              <Link as={NextLink} href="/research">Research</Link>
              <Link as={NextLink} href="/activities">Activities</Link>
              <Link as={NextLink} href="/personal">Personal</Link>
              <Button as={NextLink} href="/ja" size="sm" variant="outline" borderColor="rose.300" color="rose.700" _hover={{ bg: "rose.50" }}>
                {"\u65e5\u672c\u8a9e / JA"}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 12, md: 22 }} pb={{ base: 14, md: 22 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.08fr .92fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
          <Box>
            <Badge bg="rose.100" color="rose.700" px={3} py={1} borderRadius="4px">Portfolio</Badge>
            <Heading as="h1" mt={6} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.16" fontWeight="500">
              Misato Hayashi
            </Heading>
            <Text mt={3} color="gray.600" fontSize={{ base: "md", md: "lg" }}>
              {japaneseName} / Third-year undergraduate student, Hosei University
            </Text>
            <Text mt={8} maxW="760px" color="gray.800" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
              I am a third-year undergraduate majoring in Applied Informatics at Hosei University&apos;s Faculty of Science and Engineering, where I am a member of the Iyatomi Laboratory. My interests center on healthy longevity through medical AI, microbiome research, and technologies that support people before health issues become severe.
            </Text>
            <Text mt={5} maxW="760px" color="gray.600" lineHeight="2">
              {japaneseIntro}
            </Text>
            <HStack mt={8} spacing={4} flexWrap="wrap">
              <Button as={NextLink} href="/research" rightIcon={<ArrowForwardIcon />} bg="rose.700" color="white" _hover={{ bg: "rose.500" }}>
                View Research
              </Button>
              <Button as="a" href="mailto:hayashimisato1@gmail.com" variant="outline" borderColor="rose.300" color="rose.700" _hover={{ bg: "rose.50" }}>
                Email
              </Button>
            </HStack>
          </Box>
          <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="8px" bg="rose.100" boxShadow="0 18px 50px rgba(98, 28, 46, .12)">
            <Image src={assetPath("/photos/profile-misato.webp")} alt="Portrait of Misato Hayashi in kimono" fill priority sizes="(max-width: 992px) 88vw, 34vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
          </Box>
        </Grid>
      </Container>

      <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 18 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">SITE MAP</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Explore</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={9}>
            {pages.map((page) => (
              <Link key={page.href} as={NextLink} href={page.href} _hover={{ textDecoration: "none" }}>
                <Box h="100%" bg="#fffafb" border="1px solid" borderColor="rose.200" borderRadius="8px" p={7} transition="all .2s ease" _hover={{ transform: "translateY(-3px)", borderColor: "rose.400", boxShadow: "0 14px 32px rgba(98, 28, 46, .10)" }}>
                  <Text color="rose.700" fontSize="xs" letterSpacing=".15em" fontWeight="bold">{page.label}</Text>
                  <Heading as="h2" mt={4} fontSize="xl" fontWeight="500" lineHeight="1.35">{page.title}</Heading>
                  <Text mt={4} color="gray.600" lineHeight="1.8">{page.body}</Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container maxW="6xl" py={{ base: 14, md: 18 }}>
        <Grid templateColumns={{ base: "1fr", md: ".8fr 1.2fr" }} gap={8} alignItems="start">
          <Box>
            <Text color="rose.700" fontSize="sm" letterSpacing=".12em">CENTER THEME</Text>
            <Heading mt={3} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Healthy Longevity</Heading>
          </Box>
          <Text color="gray.700" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
            My beloved grandfather&apos;s story, ballet and body awareness, CanSat and engineering, and STEAM outreach may seem like separate experiences, but they all lead back to one question: how can technology help people live healthier, longer lives?
          </Text>
        </Grid>
      </Container>

      <Box id="contact" bg="white" borderTop="1px solid" borderColor="rose.100" py={{ base: 12, md: 14 }}>
        <Container maxW="6xl">
          <Stack spacing={3}>
            <Text color="rose.700" fontSize="sm" letterSpacing=".12em">CONTACT</Text>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">hayashimisato1@gmail.com</Heading>
            <Text color="gray.600">Hosei University Koganei Campus, 3-7-2 Kajino-cho, Koganei-shi, Tokyo 184-8584, Japan</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
