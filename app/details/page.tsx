"use client";

import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const externalLinks = [
  { label: "Hosei University Koganei Campus", ja: "法政大学 小金井キャンパス", url: "https://www.hosei.ac.jp/koganei/access/" },
  { label: "Department of Applied Informatics", ja: "応用情報工学科", url: "https://ai.ws.hosei.ac.jp/wp/" },
  { label: "Iyatomi Laboratory", ja: "彌冨研究室", url: "https://iyatomi-lab.info/" },
  { label: "SONY STEAM GIRLS EXPERIENCE", ja: "SGX公式サイト", url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/" },
  { label: "DFKI", ja: "ドイツ人工知能研究センター", url: "https://www.dfki.de/en/web" },
];

const timeline = [
  {
    year: "2021",
    title: "2nd Place in Classical Ballet",
    jaTitle: "クラシックバレエで全国2位",
    bullets: [
      ["Awarded 2nd place in the Classical C category at the Toyama International Dance Competition.", "富山国際ダンスコンペティション クラシックC部門 第2位。"],
      ["Years of ballet training shaped my persistence and discipline.", "長く続けたバレエを通じて、練習を積み重ねる力を育てました。"],
    ],
    links: [{ label: "Competition Result", url: "https://ballet-search.com/2021/11/23/toyama-dance2021/" }],
  },
  {
    year: "2022",
    title: "High School Interview",
    jaTitle: "高校時代のインタビュー",
    bullets: [
      ["Interviewed about student life at Hosei University Second High School.", "法政大学第二高等学校での学校生活や、生徒主体の環境について語ったインタビュー。"],
      ["It became one of my first experiences communicating my own story in public.", "自分の言葉で経験を伝える原点になりました。"],
    ],
    links: [{ label: "Interview Article", url: "https://hosei2.ed.jp/now/319/2022_05_31_2" }],
  },
  {
    year: "2023",
    title: "CanSat World Competition",
    jaTitle: "CanSat世界大会",
    bullets: [
      ["Won the national CanSat competition.", "缶サット甲子園で全国優勝。"],
      ["Represented Japan at the world competition in Spain.", "日本代表としてスペインの世界大会へ出場。"],
      ["This engineering and teamwork experience strengthened my interest in research.", "工学的なものづくりとチームで挑む経験が、研究への関心につながりました。"],
    ],
    links: [
      { label: "Official Site", url: "https://cansatcompetition.com/" },
      { label: "Article", url: "https://rarea.events/event/190208" },
    ],
  },
  {
    year: "2024-2026",
    title: "SONY STEAM GIRLS EXPERIENCE",
    jaTitle: "SGXでの活動",
    bullets: [
      ["Joined a scholarship-supported program for women in STEM.", "理工系女子学生を対象にした奨学金支援を受けながら活動。"],
      ["Participated in a baton-passing program that encourages younger STEAM girls through workshops and school visits.", "女子中高生に向けたワークショップや母校訪問を通じて、次世代へSTEAMの楽しさをつなぐバトンプログラムに参加。"],
      ["As a first cohort member, I connect research, career reflection, and outreach.", "SGX一期生として、研究・キャリア・発信をつなぐ経験を重ねています。"],
    ],
    links: [
      { label: "SGX Official Site", url: "https://www.sony.com/ja/SonyInfo/diversity/steam-ex/" },
      { label: "Activity Article", url: "https://hosei2.ed.jp/now/319/3998" },
      { label: "Hosei Article", url: "https://www.hosei.ac.jp/diversity/info/article-20260624130223/" },
    ],
  },
  {
    year: "2025",
    title: "HOSEI Museum Interview",
    jaTitle: "HOSEIミュージアム対談",
    bullets: [
      ["Appeared in a conversation reflecting on my challenges and university activities.", "これまでの挑戦や大学での活動を振り返る対談映像。"],
      ["It helped me practice communicating research and experiences in my own words.", "研究や活動を、自分の言葉で伝える経験になりました。"],
    ],
    links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/watch?v=ntC2RwkO6Tc" }],
  },
  {
    year: "2025",
    title: "Winner, Unitare DANCE TRACKS vol.2",
    jaTitle: "ユニタレ DANCE TRACKS vol.2 crew battle優勝",
    bullets: [
      ["Won a crew battle with my dance team.", "crew battleで優勝。"],
      ["Traveled to Korea to take dance lessons, turning curiosity into action.", "韓国へダンスレッスンを受けに行くなど、好きなことを行動に移す力も大切にしています。"],
    ],
    links: [],
  },
];

const qualifications = [
  { title: "Turkish Language Proficiency Test NE5", jaTitle: "トルコ語検定 NE5級", en: "A small record of my curiosity toward language and culture.", ja: "異なる文化や言語への好奇心から学習を継続。" },
  { title: "Abacus Proficiency, 1st Dan", jaTitle: "珠算能力検定 初段", en: "A foundation of accuracy, concentration, and steady practice.", ja: "幼い頃から積み重ねた正確さと集中力。" },
];

const photoCards = [
  { src: "/photos/sgx-workshop.webp", title: "SGX Workshop", ja: "母校訪問でのワークショップ登壇。" },
  { src: "/photos/korea-dance.webp", title: "Dance Lesson in Korea", ja: "韓国でダンスレッスンを受けた時の写真。" },
  { src: "/photos/now-latte.webp", title: "Latte Art", ja: "きれいな一杯を描けるよう練習中。" },
];

export default function Details() {
  return (
    <Box bg="#fffafb" color="ink">
      <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.9)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
        <Container maxW="6xl">
          <Flex h="68px" align="center" justify="space-between">
            <Link as={NextLink} href="/" color="rose.700" fontWeight="bold">
              <ArrowBackIcon mr={2} />
              Home
            </Link>
            <HStack spacing={{ base: 3, md: 6 }} fontSize="sm" display={{ base: "none", md: "flex" }}>
              <Link href="#timeline">Timeline</Link>
              <Link href="#achievements">Achievements</Link>
              <Link href="#links">Links</Link>
              <Link href="#future">Future</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="6xl" pt={{ base: 14, md: 20 }} pb={{ base: 14, md: 20 }}>
        <Badge bg="rose.100" color="rose.700" px={3} py={1} borderRadius="4px">Detailed Profile</Badge>
        <Heading as="h1" mt={6} fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.35" fontWeight="500">
          Activities, achievements, and future goals.
        </Heading>
        <Text mt={3} color="rose.700" fontFamily="heading" fontSize={{ base: "xl", md: "2xl" }}>
          活動・実績・目標を、詳しく。
        </Text>
        <Text mt={5} maxW="760px" color="gray.600" lineHeight="2">
          The top page gives a concise overview. This page organizes achievements, articles, official links, and future goals in detail.
        </Text>
        <Text mt={2} maxW="760px" color="gray.500" lineHeight="1.9">
          トップページでは短く見せ、ここでは実績、記事、公式リンク、これから挑戦したいことを箇条書きで整理しています。
        </Text>
      </Container>

      <Box id="timeline" bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">TIMELINE</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">A Story of Exploration</Heading>
          <Text mt={2} color="gray.500">ストーリーとしての歩み</Text>
          <Stack mt={10} spacing={0} borderTop="1px solid" borderColor="rose.200">
            {timeline.map((item) => (
              <Grid key={`${item.year}-${item.title}`} templateColumns={{ base: "1fr", md: "100px 1fr 260px" }} gap={{ base: 4, md: 8 }} py={8} borderBottom="1px solid" borderColor="rose.200">
                <Text color="rose.700" fontWeight="bold">{item.year}</Text>
                <Box>
                  <Heading as="h2" fontSize="xl" fontWeight="500">{item.title}</Heading>
                  <Text mt={1} color="rose.700" fontSize="sm">{item.jaTitle}</Text>
                  <UnorderedList mt={4} spacing={3} color="gray.700" lineHeight="1.8">
                    {item.bullets.map(([en, ja]) => (
                      <ListItem key={en}>
                        {en}
                        <Text color="gray.500" fontSize="sm" mt={1}>{ja}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
                <Stack spacing={2} align={{ base: "start", md: "end" }}>
                  {item.links.map((link) => (
                    <Link key={link.url} href={link.url} isExternal color="rose.700" fontSize="sm" fontWeight="bold">
                      {link.label} <ExternalLinkIcon mx="2px" />
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container id="achievements" maxW="6xl" py={{ base: 14, md: 20 }}>
        <Grid templateColumns={{ base: "1fr", lg: ".8fr 1.2fr" }} gap={{ base: 10, lg: 16 }}>
          <Box>
            <Text color="rose.700" fontSize="sm" letterSpacing=".12em">PROFILE</Text>
            <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Affiliation and Qualifications</Heading>
            <Text mt={2} color="gray.500">所属・資格</Text>
            <Text mt={5} color="gray.700" lineHeight="1.9">
              Misato Hayashi is a B3 student in the Department of Applied Informatics, Faculty of Science and Engineering, Hosei University, and belongs to Iyatomi Laboratory.
            </Text>
            <Text mt={2} color="gray.500" lineHeight="1.8">
              林美聡。法政大学第二高等学校出身、法政大学 理工学部 応用情報工学科 B3、彌冨研究室所属。
            </Text>
            <Text mt={4} color="gray.700" lineHeight="1.9">
              Campus: 3-7-2 Kajino-cho, Koganei-shi, Tokyo 184-8584, Japan
            </Text>
            <Text mt={1} color="gray.500">法政大学 小金井キャンパス：〒184-8584 東京都小金井市梶野町3-7-2</Text>
          </Box>
          <Stack spacing={5}>
            {qualifications.map((item) => (
              <Box key={item.title} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={7}>
                <Heading as="h3" fontSize="xl" fontWeight="500">{item.title}</Heading>
                <Text mt={1} color="rose.700" fontSize="sm">{item.jaTitle}</Text>
                <Text mt={3} color="gray.700" lineHeight="1.8">{item.en}</Text>
                <Text mt={1} color="gray.500" fontSize="sm">{item.ja}</Text>
              </Box>
            ))}
          </Stack>
        </Grid>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={{ base: 12, md: 16 }}>
          {photoCards.map((photo) => (
            <Box key={photo.src} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" overflow="hidden">
              <Box position="relative" aspectRatio={4 / 3}>
                <Image src={assetPath(photo.src)} alt={photo.title} fill sizes="(max-width: 768px) 92vw, 30vw" style={{ objectFit: "cover" }} />
              </Box>
              <Box p={5}>
                <Text color="rose.700" fontWeight="bold">{photo.title}</Text>
                <Text mt={2} color="gray.600" fontSize="sm" lineHeight="1.8">{photo.ja}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box id="links" bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          <Text color="rose.700" fontSize="sm" letterSpacing=".12em">LINKS</Text>
          <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Useful URLs</Heading>
          <Text mt={2} color="gray.500">詳しいURL</Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={9}>
            {externalLinks.map((link) => (
              <Link key={link.url} href={link.url} isExternal _hover={{ textDecoration: "none" }}>
                <Flex bg="#fffafb" border="1px solid" borderColor="rose.200" borderRadius="8px" p={6} justify="space-between" gap={4} align="center">
                  <Box>
                    <Text fontWeight="bold">{link.label}</Text>
                    <Text color="gray.500" fontSize="sm" mt={1}>{link.ja}</Text>
                  </Box>
                  <ExternalLinkIcon color="rose.700" />
                </Flex>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container id="future" maxW="6xl" py={{ base: 14, md: 20 }}>
        <Text color="rose.700" fontSize="sm" letterSpacing=".12em">FUTURE</Text>
        <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">Next Challenges</Heading>
        <Text mt={2} color="gray.500">ここから挑戦したいこと</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={9}>
          {[
            ["Undergraduate", "Build a solid foundation in medical AI, statistics, and machine learning.", "医療AI・統計・機械学習の基礎を固め、腸内細菌叢データの解析に取り組む。"],
            ["Graduate School", "Present research internationally and turn ideas into papers.", "国際会議や論文発表に挑戦し、専門性を研究成果として形にする。"],
            ["Future", "Develop the ability to conduct research at DFKI and bring medical AI into real healthcare.", "DFKIで研究できる力をつけ、健康寿命の延伸につながる医療AIを社会へ届ける。"],
          ].map(([title, en, ja]) => (
            <Box key={title} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={7}>
              <Text color="rose.700" fontWeight="bold">{title}</Text>
              <Text mt={4} color="gray.700" lineHeight="1.9">{en}</Text>
              <Text mt={2} color="gray.500" fontSize="sm" lineHeight="1.8">{ja}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
