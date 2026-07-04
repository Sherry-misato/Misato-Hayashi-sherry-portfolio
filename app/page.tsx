"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const milestones = [
  ["2023", "缶サット甲子園 全国優勝・世界大会へ日本代表として出場"],
  ["2024", "SONY STEAM GIRLS EXPERIENCE 一期生として活動"],
  ["2024", "BitaP株式会社で腸内環境と実社会をつなぐ発信を開始"],
  ["2025", "SKS JAPAN、メタジェン勉強会・交流イベントに参加"],
  ["2026", "Sony Women in Technology Award with Nature に参加"],
];

const highlights = [
  { value: "全国2位", label: "クラシックバレエ", detail: "国際ダンスコンペティション" },
  { value: "全国大会出場", label: "ソフトボール", detail: "千葉県代表選手として出場" },
  { value: "世界大会出場", label: "CanSat", detail: "缶サット甲子園で全国優勝、日本代表としてスペインへ" },
];

const strengths = [
  { no: "01", title: "研究への原点", body: "身近な家族が生活習慣病で自由を失っていく姿から、発症後の治療だけでなく、未病の段階で防ぐ仕組みに関心を持ちました。" },
  { no: "02", title: "探究するテーマ", body: "腸内細菌・医療AI・量子コンピューティングを横断し、一人ひとりに合った予防と治療の選択肢を導く研究を目指します。" },
  { no: "03", title: "行動する力", body: "研究者や企業との対話、国際大会、インターンでの情報発信を通して、関心を社会で試し、学びへ戻す循環を大切にしています。" },
];

export default function Home() {
  return <Box bg="#fffafb">
    <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.9)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
      <Container maxW="6xl"><Flex h="68px" align="center" justify="space-between"><Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text><HStack spacing={{ base: 3, md: 7 }} fontSize="sm"><Link href="#research">Research</Link><Link href="#journey">Journey</Link></HStack></Flex></Container>
    </Box>

    <Box as="main">
      <Container maxW="6xl" pt={{ base: 16, md: 24 }} pb={{ base: 20, md: 28 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1.4fr .6fr" }} gap={{ base: 12, lg: 16 }} alignItems="end">
          <GridItem><Text color="rose.700" fontSize="sm" letterSpacing=".16em" textTransform="uppercase">Medical AI / Gut Microbiome / Quantum Computing</Text><Heading as="h1" mt={6} fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.35" fontWeight="500">健康でいられる時間を、<br /><Box as="span" color="rose.700">研究の力で伸ばしたい。</Box></Heading><Text mt={8} maxW="650px" fontSize={{ base: "md", md: "lg" }} lineHeight="2" color="gray.700">腸内細菌を起点に、医療AIと量子コンピューティングの可能性を探究しています。目指すのは、病気になってから治すだけでなく、一人ひとりの未来を未病の段階から支えることです。</Text><Button as={Link} href="#research" mt={9} rightIcon={<ArrowForwardIcon />} bg="rose.700" color="white" _hover={{ bg: "rose.500", textDecoration: "none" }}>研究テーマを見る</Button></GridItem>
          <GridItem><Box borderLeft="1px solid" borderColor="rose.200" pl={7} py={2}><Text fontSize="sm" color="gray.500">Vision</Text><Text mt={3} fontFamily="heading" fontSize="2xl" lineHeight="1.7">幸せなおばあちゃんになる。</Text><Text mt={3} color="gray.600" lineHeight="1.8">健康寿命と海外での挑戦。個人的な夢を、社会へ返せる研究に変えていきます。</Text></Box></GridItem>
        </Grid>
      </Container>

      <Box id="research" bg="white" borderY="1px solid" borderColor="rose.100" py={{ base: 16, md: 24 }}><Container maxW="6xl"><Text color="rose.700" fontSize="sm">01 / RESEARCH</Text><Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">研究に向かう、3つの軸</Heading><SimpleGrid columns={{ base: 1, md: 3 }} mt={12} gap={0} borderTop="1px solid" borderColor="rose.200">{strengths.map((item) => <Box key={item.no} py={9} pr={{ md: 8 }} pl={{ md: item.no === "01" ? 0 : 8 }} borderBottom="1px solid" borderColor="rose.200" borderLeft={{ md: item.no === "01" ? "none" : "1px solid" }}><Text color="rose.500" fontSize="sm">{item.no}</Text><Heading as="h3" mt={5} fontSize="xl" fontWeight="500">{item.title}</Heading><Text mt={4} color="gray.600" lineHeight="1.9">{item.body}</Text></Box>)}</SimpleGrid>
        <Grid mt={{ base: 14, md: 20 }} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={{ base: 8, md: 14 }}><Box bg="rose.50" border="1px solid" borderColor="rose.200" borderRadius="8px" p={{ base: 7, md: 10 }}><Badge bg="white" color="rose.700" px={3} py={1}>Research Question</Badge><Heading mt={6} fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.6" fontWeight="500">腸内環境から、未来の疾病リスクを見つけられるか。</Heading></Box><Stack spacing={6} justify="center"><Text lineHeight="2" color="gray.700">約1,000種類に及ぶ腸内細菌とその変化を捉え、個別最適な治療や予防へつなげるには、膨大なデータから意味あるパターンを見つける必要があります。</Text><Text lineHeight="2" color="gray.700">画像解析や機械学習から着手し、将来は量子コンピューティングも活用しながら、生活習慣病や乳幼児疾患の早期発見に役立つ仕組みへ発展させたいと考えています。</Text></Stack></Grid>
      </Container></Box>

      <Box id="journey" py={{ base: 16, md: 24 }}><Container maxW="6xl"><Grid templateColumns={{ base: "1fr", md: ".65fr 1.35fr" }} gap={{ base: 10, md: 20 }}><Box><Text color="rose.700" fontSize="sm">02 / JOURNEY</Text><Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">好奇心を、<br />行動に変える。</Heading><Text mt={6} color="gray.600" lineHeight="1.9">分野を越えて挑戦してきた経験が、研究を続ける粘り強さと国際的な視野の土台です。</Text></Box><Stack spacing={0}>{milestones.map(([year, text]) => <Grid key={year + text} templateColumns="70px 1fr" gap={5} py={6} borderBottom="1px solid" borderColor="rose.200"><Text color="rose.700" fontWeight="bold">{year}</Text><Text lineHeight="1.8">{text}</Text></Grid>)}</Stack></Grid>
        <Box mt={{ base: 14, md: 20 }}>
          <Flex align="end" justify="space-between" gap={4} mb={6}>
            <Box><Text color="rose.700" fontSize="sm">SELECTED HIGHLIGHTS</Text><Heading mt={2} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">主な実績</Heading></Box>
            <Text color="gray.500" fontSize="sm">{String(highlights.length).padStart(2, "0")} records</Text>
          </Flex>
          <Stack spacing={0} borderTop="1px solid" borderColor="rose.200">
            {highlights.map((item, index) => <Grid key={item.label} templateColumns={{ base: "44px 1fr", md: "70px 220px 1fr" }} gap={{ base: 3, md: 7 }} alignItems="center" py={{ base: 6, md: 7 }} borderBottom="1px solid" borderColor="rose.200">
              <Text color="rose.500" fontSize="sm">{String(index + 1).padStart(2, "0")}</Text>
              <Box><Text fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} color="rose.700">{item.value}</Text><Text display={{ md: "none" }} mt={1} fontWeight="bold">{item.label}</Text></Box>
              <Box gridColumn={{ base: "2", md: "auto" }}><Text display={{ base: "none", md: "block" }} fontWeight="bold">{item.label}</Text><Text mt={{ base: 0, md: 2 }} color="gray.600" lineHeight="1.8">{item.detail}</Text></Box>
            </Grid>)}
          </Stack>
        </Box>
      </Container></Box>

      <Box bg="#35453c" color="white" py={{ base: 16, md: 24 }}><Container maxW="6xl"><Text color="rose.200" fontSize="sm">03 / NEXT</Text><Heading mt={4} maxW="760px" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.5" fontWeight="500">世界で通用する専門性を、<br />人の健康に届く価値へ。</Heading><SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt={12}>{[["学部", "医療AIの基礎を固め、腸内細菌画像の解析と国内学会発表へ。"],["修士", "国際会議・論文発表に挑み、Johns Hopkins Universityでの研究を目指す。"],["その先", "健康寿命の分野で国境を越えて共同研究し、社会に届く成果を生み出す。"]].map(([title,body]) => <Box key={title} borderTop="1px solid" borderColor="whiteAlpha.400" pt={6}><Text color="rose.200" fontWeight="bold">{title}</Text><Text mt={4} color="whiteAlpha.800" lineHeight="1.9">{body}</Text></Box>)}</SimpleGrid></Container></Box>
    </Box>

    <Box as="footer" bg="white" py={10}><Container maxW="6xl"><Flex direction={{ base: "column", sm: "row" }} gap={3} justify="space-between"><Text fontFamily="heading">Misato Hayashi</Text><Text color="gray.500" fontSize="sm">Research Portfolio</Text></Flex></Container></Box>
  </Box>;
}
