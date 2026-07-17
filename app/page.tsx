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

const navItems = [
  ["About", "#about"],
  ["Research", "#research"],
  ["Highlights", "#highlights"],
  ["Contact", "#contact"],
];

const profileLinks = [
  { label: "Hosei University Koganei Campus", ja: "法政大学 小金井キャンパス", url: "https://www.hosei.ac.jp/koganei/access/" },
  { label: "Department of Applied Informatics", ja: "応用情報工学科", url: "https://ai.ws.hosei.ac.jp/wp/" },
  { label: "Iyatomi Laboratory", ja: "彌冨研究室", url: "https://iyatomi-lab.info/" },
];

const news = [
  { year: "2026", en: "Presented at a workshop for younger students through SONY STEAM GIRLS EXPERIENCE.", ja: "SONY STEAM GIRLS EXPERIENCEの活動として、母校訪問ワークショップに登壇。", url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/" },
  { year: "2025", en: "Appeared in a HOSEI Museum interview about university life and challenges.", ja: "HOSEIミュージアム対談に出演し、大学での挑戦と学びを紹介。", url: "https://www.youtube.com/watch?v=ntC2RwkO6Tc" },
  { year: "2024", en: "Joined SONY STEAM GIRLS EXPERIENCE as a first cohort member.", ja: "SONY STEAM GIRLS EXPERIENCE一期生として活動を開始。", url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/" },
  { year: "2023", en: "Represented Japan at the CanSat World Competition.", ja: "CanSat World Competitionに日本代表として出場。", url: "https://cansatcompetition.com/" },
];

const featuredStories = [
  {
    title: "HOSEI Museum Interview",
    jaTitle: "HOSEIミュージアム対談",
    body: "A video interview about my university life, research interests, and challenges.",
    ja: "大学での挑戦や活動を振り返る対談映像です。",
    url: "https://www.youtube.com/watch?v=ntC2RwkO6Tc",
    thumbnail: "https://img.youtube.com/vi/ntC2RwkO6Tc/hqdefault.jpg",
  },
  {
    title: "SONY STEAM GIRLS EXPERIENCE",
    jaTitle: "SGX公式サイト",
    body: "A scholarship-supported baton-passing program for women in STEM.",
    ja: "理工系女子学生への奨学金支援と、次世代へSTEAMをつなぐプログラムです。",
    url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/",
    thumbnail: "/photos/sgx-workshop.webp",
  },
  {
    title: "CanSat World Competition",
    jaTitle: "CanSat世界大会",
    body: "A hands-on engineering competition that led me to international teamwork.",
    ja: "ものづくりとチームで挑む経験が、研究への関心につながりました。",
    url: "https://cansatcompetition.com/",
    thumbnail: "/photos/cansat-world.webp",
  },
];

const researchCards = [
  {
    title: "Research Question",
    jaTitle: "研究の問い",
    en: "Can changes in the gut microbiome help us detect future health risks earlier?",
    ja: "腸内細菌叢の変化から、将来の疾患リスクや健康状態をより早く読み取れるのかを探っています。",
  },
  {
    title: "Interests",
    jaTitle: "関心領域",
    en: "Medical AI, gut microbiome analysis, statistics, machine learning, and quantum computing.",
    ja: "医療AI、腸内細菌叢、統計、機械学習、量子コンピューティングを横断して学んでいます。",
  },
  {
    title: "Long-term Vision",
    jaTitle: "目指す姿",
    en: "I want to build systems that support health before illness becomes visible.",
    ja: "病気になってから治すだけでなく、未病の段階で健康を守れる仕組みを社会に届けたいです。",
  },
];

const highlights = [
  {
    year: "2021",
    title: "2nd Place in a National Ballet Competition",
    jaTitle: "クラシックバレエ 全国2位",
    en: "Awarded 2nd place at the Toyama International Dance Competition.",
    ja: "富山国際ダンスコンペティション 第2位。",
    links: [{ label: "Competition Result", url: "https://ballet-search.com/2021/11/23/toyama-dance2021/", isExternal: true }],
  },
  {
    year: "2023",
    title: "CanSat World Competition",
    jaTitle: "CanSat世界大会",
    en: "Won the national CanSat competition and represented Japan at the world competition.",
    ja: "缶サット甲子園で全国優勝。日本代表として世界大会へ出場。",
    links: [
      { label: "Official Site", url: "https://cansatcompetition.com/", isExternal: true },
      { label: "Article", url: "https://rarea.events/event/190208", isExternal: true },
    ],
  },
  {
    year: "2024-2026",
    title: "SONY STEAM GIRLS EXPERIENCE",
    jaTitle: "SGXでの活動",
    en: "A scholarship and baton-passing program that supports women in STEM and encourages the next generation.",
    ja: "理工系女子学生への奨学金支援と、次世代へSTEAMの楽しさをつなぐバトンプログラムに参加。",
    links: [{ label: "SGX Official Site", url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/", isExternal: true }],
  },
  {
    year: "2025",
    title: "Winner, Unitare DANCE TRACKS vol.2",
    jaTitle: "crew battle優勝",
    en: "Won a crew battle and traveled to Korea to take dance lessons.",
    ja: "ユニタレ DANCE TRACKS vol.2のcrew battleで優勝。韓国へダンスレッスンを受けに行く行動力も大切にしています。",
    links: [{ label: "Details", url: "/details#dance", isExternal: false }],
  },
];

const contactItems = [
  { label: "Email", value: "hayashimisato1@gmail.com", note: "公開用メールアドレス" },
  { label: "Campus", value: "3-7-2 Kajino-cho, Koganei-shi, Tokyo 184-8584, Japan", note: "〒184-8584 東京都小金井市梶野町3-7-2" },
  { label: "Affiliation", value: "Third-year undergraduate student, Department of Applied Informatics, Hosei University / Iyatomi Laboratory", note: "法政大学 理工学部 応用情報工学科 学部3年 / 彌冨研究室" },
];

export default function Home() {
  return (
    <Box bg="#fffafb" color="ink">
      <Box as="header" position="sticky" top="0" zIndex="10" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.9)" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" _hover={{ textDecoration: "none" }}>
              <Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text>
            </Link>
            <HStack spacing={{ base: 3, md: 7 }} fontSize="sm" display={{ base: "none", sm: "flex" }}>
              {navItems.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Box as="main">
        <Container id="about" maxW="6xl" pt={{ base: 14, md: 22 }} pb={{ base: 18, md: 28 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1.25fr .75fr" }} gap={{ base: 12, lg: 16 }} alignItems="center">
            <Box>
              <Badge bg="rose.100" color="rose.700" px={3} py={1} borderRadius="4px">Research Portfolio</Badge>
              <Heading as="h1" mt={6} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.25" fontWeight="500">
                Misato Hayashi
                <Text as="span" display="block" color="rose.700" fontSize={{ base: "2xl", md: "4xl" }} mt={3}>
                  林 美聡
                </Text>
              </Heading>
              <Text mt={5} color="gray.700" lineHeight="2" fontSize={{ base: "md", md: "lg" }}>
                Third-year undergraduate student in Applied Informatics at Hosei University, Iyatomi Laboratory.
              </Text>
              <Text mt={2} color="gray.500" lineHeight="1.9">
                法政大学第二高等学校出身。現在は法政大学 理工学部 応用情報工学科の学部3年として、彌冨研究室で学んでいます。
              </Text>
              <Heading as="p" mt={9} maxW="820px" fontSize={{ base: "2xl", md: "4xl" }} lineHeight="1.55" fontWeight="500">
                Extending healthy years through medical AI and microbiome research.
              </Heading>
              <Text mt={3} color="rose.700" fontFamily="heading" fontSize={{ base: "xl", md: "2xl" }}>
                健康でいられる時間を、研究の力で伸ばしたい。
              </Text>
              <Text mt={6} maxW="720px" color="gray.700" lineHeight="2">
                Inspired by my beloved grandfather&apos;s experience with illness, I am interested in preventive healthcare: supporting people before symptoms become severe. I hope to connect gut microbiome data, AI, and future computing technologies to create more personalized options for health.
              </Text>
              <Text mt={3} maxW="720px" color="gray.500" lineHeight="1.9">
                大好きな祖父の経験から、発症後の治療だけでなく未病の段階で支える研究に惹かれています。腸内細菌叢、AI、量子技術を横断しながら、一人ひとりに合う予防と治療の選択肢を広げたいです。
              </Text>
              <HStack mt={8} spacing={4} flexWrap="wrap">
                <Button as={NextLink} href="/details" rightIcon={<ArrowForwardIcon />} bg="rose.700" color="white" _hover={{ bg: "rose.500" }}>
                  View Details
                </Button>
                <Button as="a" href="#contact" variant="outline" borderColor="rose.300" color="rose.700">
                  Contact
                </Button>
              </HStack>
            </Box>
            <Box>
              <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="8px" bg="rose.100">
                <Image src={assetPath("/photos/profile-misato.webp")} alt="Portrait of Misato Hayashi in kimono" fill priority sizes="(max-width: 992px) 88vw, 34vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
              </Box>
              <Stack mt={5} spacing={2}>
                {profileLinks.map((item) => (
                  <Link key={item.url} href={item.url} isExternal color="rose.700" fontSize="sm" fontWeight="bold">
                    {item.label}
                    <Text as="span" color="gray.500" fontWeight="normal"> / {item.ja}</Text> <ExternalLinkIcon mx="2px" />
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Container>

        <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 20 }}>
          <Container maxW="6xl">
            <Text color="rose.700" fontSize="sm" letterSpacing=".12em">INTRODUCTION</Text>
            <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Biography</Heading>
            <Text mt={2} color="gray.500">はじめに</Text>
            <Text mt={7} maxW="900px" color="gray.800" fontSize={{ base: "md", md: "lg" }} lineHeight="2">
              Misato Hayashi is a third-year undergraduate student in the Department of Applied Informatics at Hosei University, working in Iyatomi Laboratory. Her interests lie at the intersection of medical AI, gut microbiome analysis, and preventive healthcare. Through research, STEAM outreach, dance, and international experiences, she values turning curiosity into action and sharing what she learns with others.
            </Text>
            <Text mt={4} maxW="900px" color="gray.500" lineHeight="1.9">
              林美聡は、法政大学 理工学部 応用情報工学科の学部3年として彌冨研究室で学んでいます。医療AI、腸内細菌叢、予防医療に関心があり、研究・STEAM活動・ダンス・海外での経験を通して、好奇心を行動に変え、学びを人に届けることを大切にしています。
            </Text>
          </Container>
        </Box>

        <Box bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 20 }}>
          <Container maxW="6xl">
            <Flex align="end" justify="space-between" gap={6} mb={8}>
              <Box>
                <Text color="rose.700" fontSize="sm" letterSpacing=".12em">NEWS</Text>
                <Heading mt={2} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Recent Activities</Heading>
                <Text mt={2} color="gray.500">最近の活動</Text>
              </Box>
              <Link as={NextLink} href="/details#timeline" color="rose.700" fontWeight="bold" fontSize="sm">
                See all <ArrowForwardIcon />
              </Link>
            </Flex>
            <Stack spacing={0} borderTop="1px solid" borderColor="rose.200">
              {news.map((item) => (
                <Grid key={item.en} templateColumns={{ base: "64px 1fr", md: "96px 1fr" }} gap={5} py={5} borderBottom="1px solid" borderColor="rose.200">
                  <Text color="rose.700" fontWeight="bold">{item.year}</Text>
                  <Box>
                    <Link href={item.url} isExternal color="gray.800" lineHeight="1.8" fontWeight="bold">
                      {item.en} <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Text mt={1} color="gray.500" fontSize="sm" lineHeight="1.8">{item.ja}</Text>
                  </Box>
                </Grid>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container maxW="6xl" py={{ base: 16, md: 22 }}>
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">FEATURED STORIES</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Explore More</Heading>
          <Text mt={2} color="gray.500">詳しく見たくなるリンク</Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={9}>
            {featuredStories.map((story) => (
              <Link key={story.title} href={story.url} isExternal _hover={{ textDecoration: "none" }}>
                <Box bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" overflow="hidden" h="100%">
                  <Box position="relative" aspectRatio={16 / 9} bg="rose.100">
                    {story.thumbnail.startsWith("http") ? (
                      <Box as="img" src={story.thumbnail} alt={story.title} w="full" h="full" objectFit="cover" />
                    ) : (
                      <Image src={assetPath(story.thumbnail)} alt={story.title} fill sizes="(max-width: 768px) 92vw, 30vw" style={{ objectFit: "cover" }} />
                    )}
                  </Box>
                  <Box p={6}>
                    <Text color="rose.700" fontWeight="bold">{story.title}</Text>
                    <Text mt={1} color="gray.500" fontSize="sm">{story.jaTitle}</Text>
                    <Text mt={4} color="gray.700" lineHeight="1.8">{story.body}</Text>
                    <Text mt={2} color="gray.500" fontSize="sm" lineHeight="1.7">{story.ja}</Text>
                    <Text mt={5} color="rose.700" fontWeight="bold" fontSize="sm">Open <ExternalLinkIcon mx="2px" /></Text>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Container>

        <Container id="research" maxW="6xl" py={{ base: 16, md: 24 }}>
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">RESEARCH</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Research Focus</Heading>
          <Text mt={2} color="gray.500">研究とこれからの軸</Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} mt={10} gap={5}>
            {researchCards.map((item) => (
              <Box key={item.title} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={{ base: 6, md: 8 }}>
                <Heading as="h3" fontSize="xl" fontWeight="500">{item.title}</Heading>
                <Text mt={1} color="rose.700" fontSize="sm">{item.jaTitle}</Text>
                <Text mt={4} color="gray.700" lineHeight="1.9">{item.en}</Text>
                <Text mt={2} color="gray.500" fontSize="sm" lineHeight="1.8">{item.ja}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>

        <Box id="highlights" bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 16, md: 24 }}>
          <Container maxW="6xl">
            <Flex align="end" justify="space-between" gap={6} mb={9}>
              <Box>
                <Text color="rose.700" fontSize="sm" letterSpacing=".12em">HIGHLIGHTS</Text>
                <Heading mt={2} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Selected Achievements</Heading>
                <Text mt={2} color="gray.500">主な実績と活動</Text>
              </Box>
              <Button as={NextLink} href="/details#achievements" rightIcon={<ArrowForwardIcon />} variant="outline" borderColor="rose.300" color="rose.700">
                Details
              </Button>
            </Flex>
            <Stack spacing={0} borderTop="1px solid" borderColor="rose.200">
              {highlights.map((item) => (
                <Grid key={item.title} templateColumns={{ base: "1fr", md: "90px 1fr 220px" }} gap={{ base: 3, md: 8 }} py={7} borderBottom="1px solid" borderColor="rose.200">
                  <Text color="rose.700" fontWeight="bold">{item.year}</Text>
                  <Box>
                    <Heading as="h3" fontSize="xl" fontWeight="500">{item.title}</Heading>
                    <Text mt={1} color="rose.700" fontSize="sm">{item.jaTitle}</Text>
                    <Text mt={3} color="gray.700" lineHeight="1.8">{item.en}</Text>
                    <Text mt={1} color="gray.500" fontSize="sm" lineHeight="1.8">{item.ja}</Text>
                  </Box>
                  <Stack spacing={2} align={{ base: "start", md: "end" }}>
                    {item.links.map((link) => (
                      <Link key={link.url} href={link.url} isExternal={link.isExternal !== false} color="rose.700" fontSize="sm" fontWeight="bold">
                        {link.label} <ExternalLinkIcon mx="2px" />
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container maxW="6xl" py={{ base: 16, md: 24 }}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 14, lg: 14 }}>
            <Box>
              <Text color="rose.700" fontSize="sm" letterSpacing=".12em">STUDY & ACTIVITY</Text>
              <Heading mt={3} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Academic Work and Outreach</Heading>
              <Text mt={2} color="gray.500">勉強と活動</Text>
              <Grid mt={7} templateColumns=".72fr 1.28fr" gap={3} alignItems="end">
                <Box position="relative" aspectRatio={3 / 4} overflow="hidden" borderRadius="8px">
                  <Image src={assetPath("/photos/now-presentation.webp")} alt="Presentation at a SGX workshop" fill sizes="(max-width: 992px) 36vw, 18vw" style={{ objectFit: "cover" }} />
                </Box>
                <Box position="relative" aspectRatio={4 / 3} overflow="hidden" borderRadius="8px">
                  <Image src={assetPath("/photos/now-sgx-team.webp")} alt="SGX workshop members" fill sizes="(max-width: 992px) 56vw, 28vw" style={{ objectFit: "cover" }} />
                </Box>
              </Grid>
              <Text mt={6} color="gray.700" lineHeight="1.9">
                I am strengthening my foundations in medical AI, statistics, and academic English while sharing my experiences with younger students through SGX.
              </Text>
              <Text mt={2} color="gray.500" fontSize="sm" lineHeight="1.8">
                医療AI、統計、英語論文の基礎を学びながら、SGXでは自分の経験を後輩へ伝える活動にも取り組んでいます。
              </Text>
            </Box>

            <Box>
              <Text color="rose.700" fontSize="sm" letterSpacing=".12em">LIFE & FAVORITES</Text>
              <Heading mt={3} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Personal Interests</Heading>
              <Text mt={2} color="gray.500">プライベートの好きなこと</Text>
              <Grid mt={7} templateColumns="1.15fr .85fr" templateRows="1fr 1fr" gap={3} h={{ base: "330px", sm: "410px" }}>
                <Box position="relative" gridRow="1 / span 2" overflow="hidden" borderRadius="8px">
                  <Image src={assetPath("/photos/now-latte.webp")} alt="Latte art in a cafe" fill sizes="(max-width: 992px) 56vw, 28vw" style={{ objectFit: "cover", objectPosition: "82% center" }} />
                </Box>
                <Box position="relative" overflow="hidden" borderRadius="8px">
                  <Image src={assetPath("/photos/now-dance.webp")} alt="Dance crew battle winners" fill sizes="(max-width: 992px) 36vw, 18vw" style={{ objectFit: "cover" }} />
                </Box>
                <Box position="relative" overflow="hidden" borderRadius="8px">
                  <Image src={assetPath("/photos/korea-dance.webp")} alt="Dance lesson in Korea" fill sizes="(max-width: 992px) 36vw, 18vw" style={{ objectFit: "cover", objectPosition: "center 35%" }} />
                </Box>
              </Grid>
              <Text mt={6} color="gray.700" lineHeight="1.9">
                I love small, graceful challenges: practicing latte art, dancing with friends, and traveling to Korea for lessons when I want to learn more.
              </Text>
              <Text mt={2} color="gray.500" fontSize="sm" lineHeight="1.8">
                ラテアートの練習やダンスなど、日常の中の小さな挑戦も大切にしています。もっと学びたいと思ったら韓国までレッスンを受けに行く行動力も、自分らしさのひとつです。
              </Text>
            </Box>
          </Grid>
        </Container>

        <Box bg="#35453c" color="white" py={{ base: 16, md: 22 }}>
          <Container maxW="6xl">
            <Text color="rose.200" fontSize="sm" letterSpacing=".12em">FUTURE</Text>
            <Heading mt={4} maxW="850px" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.45" fontWeight="500">
              Toward research at DFKI and medical AI that reaches real people.
            </Heading>
            <Text mt={4} color="rose.100" fontFamily="heading" fontSize={{ base: "xl", md: "2xl" }}>
              DFKIで研究できる力をつけ、医療AIを人の健康に届く価値へ。
            </Text>
            <Text mt={6} maxW="760px" color="whiteAlpha.850" lineHeight="2">
              My goal is to present research internationally, publish papers, and eventually conduct research at the German Research Center for Artificial Intelligence (DFKI).
            </Text>
            <Text mt={2} maxW="760px" color="whiteAlpha.700" lineHeight="1.9">
              国際会議・論文発表に挑み、ドイツ人工知能研究センター（DFKI）で研究することを目標にしています。
            </Text>
            <Button as={NextLink} href="/details#future" mt={9} rightIcon={<ArrowForwardIcon />} bg="white" color="rose.700" _hover={{ bg: "rose.100" }}>
              Read Future Goals
            </Button>
          </Container>
        </Box>

        <Container id="contact" maxW="6xl" py={{ base: 14, md: 18 }}>
          <Grid templateColumns={{ base: "1fr", md: ".75fr 1.25fr" }} gap={{ base: 8, md: 12 }}>
            <Box>
              <Text color="rose.700" fontSize="sm" letterSpacing=".12em">CONTACT</Text>
              <Heading mt={3} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">Contact and Affiliation</Heading>
              <Text mt={2} color="gray.500">連絡先・所属</Text>
            </Box>
            <Stack spacing={0} borderTop="1px solid" borderColor="rose.200">
              {contactItems.map((item) => (
                <Grid key={item.label} templateColumns={{ base: "1fr", sm: "140px 1fr" }} gap={3} py={5} borderBottom="1px solid" borderColor="rose.200">
                  <Text color="rose.700" fontWeight="bold">{item.label}</Text>
                  <Box>
                    <Text color="gray.800">{item.value}</Text>
                    <Text mt={1} color="gray.500" fontSize="sm">{item.note}</Text>
                  </Box>
                </Grid>
              ))}
            </Stack>
          </Grid>
        </Container>
      </Box>

      <Box as="footer" bg="white" borderTop="1px solid" borderColor="rose.100" py={10}>
        <Container maxW="6xl">
          <Flex direction={{ base: "column", sm: "row" }} gap={3} justify="space-between">
            <Text fontFamily="heading">Misato Hayashi</Text>
            <Text color="gray.500" fontSize="sm">Research Portfolio</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
