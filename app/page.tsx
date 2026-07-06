"use client";

import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const milestones = [
  ["2023", "缶サット甲子園 全国優勝・世界大会へ日本代表として出場"],
  ["2024", "SONY STEAM GIRLS EXPERIENCE 一期生として活動"],
  ["2024", "BitaP株式会社で腸内環境と実社会をつなぐ発信を開始"],
  ["2025", "SKS JAPAN、メタジェン勉強会・交流イベントに参加"],
  ["2026", "Sony Women in Technology Award with Nature に参加"],
];

const storyTimeline = [
  { year: "2021", title: "舞台で培った継続力", body: "3歳から続けたクラシックバレエで、富山国際ダンスコンペティション クラシックC部門第2位。", tag: "実績" },
  { year: "2022", title: "関心を言葉にする", body: "IBM量子サマーキャンプ一期生として学び、高校生活についての在校生インタビューも公開。", tag: "実績" },
  { year: "2023", title: "日本代表として世界へ", body: "缶サット甲子園で全国優勝。日本代表としてスペインの世界大会に出場し、各国の仲間と出会う。", tag: "実績" },
  { year: "2024", title: "研究と社会をつなぎ始める", body: "SONY STEAM GIRLS EXPERIENCE一期生として活動。BitaP株式会社では、腸内環境に関する発信を実社会へ届ける。", tag: "実績" },
  { year: "2025", title: "腸内細菌への探究を深める", body: "SKS JAPANやメタジェンの勉強会・交流会に参加。HOSEIミュージアム対談では、これまでの挑戦を振り返る。", tag: "実績" },
  { year: "2026", title: "研究者としての未来を描く", body: "Sony Women in Technology Award with Natureに参加。医療AIと腸内細菌を軸に、研究テーマを具体化している。", tag: "現在" },
];

const journeyPhotos = [
  { src: "/photos/ibm-quantum-camp.webp", alt: "IBM量子サマーキャンプでの記念写真", caption: "IBM Quantum Summer Camp" },
  { src: "/photos/cansat-world.webp", alt: "CanSat世界大会の参加者集合写真", caption: "CanSat World Competition" },
  { src: "/photos/sgx-members.webp", alt: "SONY STEAM GIRLS EXPERIENCEのメンバー", caption: "SONY STEAM GIRLS EXPERIENCE" },
  { src: "/photos/sgx-workshop.webp", alt: "SONY STEAM GIRLS EXPERIENCEの活動風景", caption: "STEAM Workshop" },
];

const highlights = [
  { value: "全国2位", label: "クラシックバレエ", detail: "国際ダンスコンペティション" },
  { value: "全国大会出場", label: "ソフトボール", detail: "千葉県代表選手として出場" },
  { value: "世界大会出場", label: "CanSat", detail: "缶サット甲子園で全国優勝、日本代表としてスペインへ" },
];

const allHighlights = [
  ...highlights,
  { value: "Crew Battle 優勝", label: "ストリートダンス", detail: "ユニタレ DANCE TRACKS vol.2" },
];

const highlightLinks = [
  [{ label: "大会結果", url: "https://ballet-search.com/2021/11/23/toyama-dance2021/" }],
  [],
  [
    { label: "世界大会公式サイト", url: "https://cansatcompetition.com/" },
    { label: "全国優勝・世界大会出場の記事", url: "https://rarea.events/event/190208" },
  ],
  [],
];

const featuredStories = [
  {
    year: "2022",
    type: "INTERVIEW",
    title: "高校時代の在校生インタビュー",
    description: "法政二高での学校生活と、生徒主体の環境について語ったインタビュー。",
    links: [{ label: "インタビューを読む", url: "https://hosei2.ed.jp/now/319/2022_05_31_2" }],
  },
  {
    year: "2024-2026",
    type: "ACTIVITY",
    title: "SONY STEAM GIRLS EXPERIENCE",
    description: "一期生として参加したSTEAM分野での学びと活動。",
    links: [
      { label: "活動紹介", url: "https://hosei2.ed.jp/now/319/3998" },
      { label: "法政大学掲載記事", url: "https://www.hosei.ac.jp/diversity/info/article-20260624130223/" },
    ],
  },
  {
    year: "2025",
    type: "TALK",
    title: "HOSEIミュージアム 対談",
    description: "これまでの挑戦や大学での活動を振り返る対談映像。",
    links: [{ label: "YouTubeで視聴", url: "https://www.youtube.com/watch?v=ntC2RwkO6Tc" }],
  },
];

const strengths = [
  { no: "01", title: "研究への原点", body: "身近な家族が生活習慣病で自由を失っていく姿から、発症後の治療だけでなく、未病の段階で防ぐ仕組みに関心を持ちました。" },
  { no: "02", title: "探究するテーマ", body: "腸内細菌・医療AI・量子コンピューティングを横断し、一人ひとりに合った予防と治療の選択肢を導く研究を目指します。" },
  { no: "03", title: "行動する力", body: "研究者や企業との対話、国際大会、インターンでの情報発信を通して、関心を社会で試し、学びへ戻す循環を大切にしています。" },
];

export default function Home() {
  return <Box bg="#fffafb">
    <Box as="header" borderBottom="1px solid" borderColor="rose.100" bg="rgba(255,250,251,.9)" position="sticky" top="0" zIndex="10" backdropFilter="blur(12px)">
      <Container maxW="6xl"><Flex h="68px" align="center" justify="space-between"><Text fontFamily="heading" fontSize="lg">Misato Hayashi</Text><HStack spacing={{ base: 3, md: 7 }} fontSize="sm"><Link href="#research">Research</Link><Link href="#journey">Journey</Link><Link href="#now">Now</Link></HStack></Flex></Container>
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

      <Box id="journey" py={{ base: 16, md: 24 }}><Container maxW="6xl"><Grid templateColumns={{ base: "1fr", md: ".65fr 1.35fr" }} gap={{ base: 10, md: 20 }}><Box><Text color="rose.700" fontSize="sm">02 / PAST & PRESENT</Text><Badge mt={4} bg="rose.100" color="rose.700" px={3} py={1}>これまでの実績</Badge><Heading mt={4} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">好奇心を、<br />行動に変えてきた。</Heading><Text mt={6} color="gray.600" lineHeight="1.9">舞台、ものづくり、海外での出会い。分野を越えた経験が、健康を支える研究へ向かう一本の道になりました。</Text></Box><Stack spacing={0}>{storyTimeline.map((item) => <Grid key={item.year} templateColumns={{ base: "58px 1fr", md: "80px 1fr" }} gap={{ base: 4, md: 6 }} py={7} borderBottom="1px solid" borderColor="rose.200"><Text color="rose.700" fontWeight="bold">{item.year}</Text><Box><HStack spacing={3}><Heading as="h3" fontSize="lg" fontWeight="500">{item.title}</Heading><Badge colorScheme={item.tag === "現在" ? "green" : "pink"} variant="subtle">{item.tag}</Badge></HStack><Text mt={3} color="gray.600" lineHeight="1.8">{item.body}</Text></Box></Grid>)}</Stack></Grid>
        <Box mt={{ base: 14, md: 20 }}><Flex align="end" justify="space-between" gap={4} mb={6}><Box><Text color="rose.700" fontSize="sm">MOMENTS</Text><Heading mt={2} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">挑戦を、次の挑戦へ。</Heading></Box><Text display={{ base: "none", md: "block" }} maxW="360px" color="gray.500" fontSize="sm" lineHeight="1.8">量子技術との出会い、世界大会、STEAMで学ぶ仲間。ひとつの経験が、次の好奇心を連れてきました。</Text></Flex><Grid templateColumns={{ base: "1fr 1fr", md: "1fr 1.35fr 1fr 1.35fr" }} gap={3}>{journeyPhotos.map((photo) => <Box key={photo.src}><Box position="relative" aspectRatio={4 / 3} overflow="hidden" borderRadius="6px" bg="rose.100"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 25vw" style={{ objectFit: "cover" }} /></Box><Text mt={2} color="gray.500" fontSize="xs">{photo.caption}</Text></Box>)}</Grid></Box>
        <Box mt={{ base: 14, md: 20 }}>
          <Flex align="end" justify="space-between" gap={4} mb={6}>
            <Box><Text color="rose.700" fontSize="sm">SELECTED HIGHLIGHTS</Text><Heading mt={2} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">主な実績</Heading></Box>
            <Text color="gray.500" fontSize="sm">{String(allHighlights.length).padStart(2, "0")} records</Text>
          </Flex>
          <Stack spacing={0} borderTop="1px solid" borderColor="rose.200">
            {allHighlights.map((item, index) => <Grid key={item.label} templateColumns={{ base: "44px 1fr", md: "70px 220px 1fr" }} gap={{ base: 3, md: 7 }} alignItems="center" py={{ base: 6, md: 7 }} borderBottom="1px solid" borderColor="rose.200">
              <Text color="rose.500" fontSize="sm">{String(index + 1).padStart(2, "0")}</Text>
              <Box><Text fontFamily="heading" fontSize={{ base: "2xl", md: "3xl" }} color="rose.700">{item.value}</Text><Text display={{ md: "none" }} mt={1} fontWeight="bold">{item.label}</Text></Box>
              <Box gridColumn={{ base: "2", md: "auto" }}><Text display={{ base: "none", md: "block" }} fontWeight="bold">{item.label}</Text><Text mt={{ base: 0, md: 2 }} color="gray.600" lineHeight="1.8">{item.detail}</Text>{highlightLinks[index]?.length > 0 && <HStack mt={3} spacing={4} flexWrap="wrap">{highlightLinks[index].map((link) => <Link key={link.url} href={link.url} isExternal color="rose.700" fontSize="sm" fontWeight="bold">{link.label} <ExternalLinkIcon mx="2px" /></Link>)}</HStack>}</Box>
            </Grid>)}
          </Stack>
        </Box>

        <Box mt={{ base: 16, md: 24 }}>
          <Text color="rose.700" fontSize="sm">FEATURED STORIES</Text>
          <Heading mt={2} fontSize={{ base: "2xl", md: "3xl" }} fontWeight="500">インタビュー・掲載</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={5} mt={8}>
            {featuredStories.map((story) => <Box key={story.title} bg="white" border="1px solid" borderColor="rose.200" borderRadius="8px" p={{ base: 6, md: 7 }} display="flex" flexDirection="column">
              <Flex justify="space-between" gap={3}><Text color="rose.700" fontSize="xs" fontWeight="bold" letterSpacing=".12em">{story.type}</Text><Text color="gray.500" fontSize="sm">{story.year}</Text></Flex>
              <Heading as="h3" mt={5} fontSize="xl" fontWeight="500" lineHeight="1.6">{story.title}</Heading>
              <Text mt={3} color="gray.600" lineHeight="1.8" flex="1">{story.description}</Text>
              <Stack mt={6} spacing={2}>{story.links.map((link) => <Link key={link.url} href={link.url} isExternal color="rose.700" fontSize="sm" fontWeight="bold">{link.label} <ExternalLinkIcon mx="2px" /></Link>)}</Stack>
            </Box>)}
          </SimpleGrid>
        </Box>
      </Container></Box>

      <Box id="now" bg="white" borderTop="1px solid" borderColor="rose.100" py={{ base: 16, md: 24 }}><Container maxW="6xl">
        <Text color="rose.700" fontSize="sm">03 / NOW</Text>
        <Heading mt={3} fontSize={{ base: "3xl", md: "4xl" }} fontWeight="500">今、頑張っていること。</Heading>
        <Text mt={5} maxW="680px" color="gray.600" lineHeight="1.9">研究に向かう時間も、好きなことに夢中になる時間も、どちらも私らしさをつくる大切な日々です。</Text>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 16, lg: 14 }} mt={{ base: 12, md: 16 }}>
          <Box>
            <Grid templateColumns=".72fr 1.28fr" gap={3} alignItems="end"><Box position="relative" aspectRatio={3 / 4} overflow="hidden" borderRadius="6px"><Image src="/photos/now-presentation.webp" alt="SGXの母校訪問で発表する様子" fill sizes="(max-width: 992px) 38vw, 18vw" style={{ objectFit: "cover" }} /></Box><Box position="relative" aspectRatio={4 / 3} overflow="hidden" borderRadius="6px"><Image src="/photos/now-sgx-team.webp" alt="SGXの母校訪問に参加したメンバー" fill sizes="(max-width: 992px) 58vw, 28vw" style={{ objectFit: "cover" }} /></Box></Grid>
            <Text mt={7} color="sage" fontSize="xs" fontWeight="bold" letterSpacing=".14em">STUDY & ACTIVITY</Text>
            <Heading as="h3" mt={3} fontSize="2xl" fontWeight="500">学びを深め、言葉にして届ける</Heading>
            <Text mt={4} color="gray.600" lineHeight="1.9">医療AI・統計・機械学習の基礎と英語論文の読解に取り組んでいます。SGXの母校訪問では、自分の経験を後輩へ伝えることにも挑戦しました。</Text>
          </Box>
          <Box>
            <Grid templateColumns="1.18fr .82fr" gap={3} alignItems="start"><Box position="relative" aspectRatio={4 / 3} overflow="hidden" borderRadius="6px"><Image src="/photos/now-latte.webp" alt="ラテアートと彩り豊かなサラダ" fill sizes="(max-width: 992px) 58vw, 28vw" style={{ objectFit: "cover" }} /></Box><Box position="relative" aspectRatio={3 / 4} overflow="hidden" borderRadius="6px"><Image src="/photos/now-dance.webp" alt="crew battleで優勝したダンスメンバー" fill sizes="(max-width: 992px) 38vw, 18vw" style={{ objectFit: "cover" }} /></Box></Grid>
            <Text mt={7} color="rose.700" fontSize="xs" fontWeight="bold" letterSpacing=".14em">LIFE & FAVORITES</Text>
            <Heading as="h3" mt={3} fontSize="2xl" fontWeight="500">小さな「できた」を楽しむ</Heading>
            <Text mt={4} color="gray.600" lineHeight="1.9">ラテアートは、きれいな一杯を描けるよう練習中。ダンスでは仲間とcrew battle優勝を喜びました。おいしく食べること、身体を動かすことも、健やかに研究を続けるための大切な習慣です。</Text>
          </Box>
        </SimpleGrid>
      </Container></Box>

      <Box bg="#35453c" color="white" py={{ base: 16, md: 24 }}><Container maxW="6xl"><Text color="rose.200" fontSize="sm">04 / FUTURE</Text><Badge mt={4} bg="whiteAlpha.200" color="rose.100" px={3} py={1}>これから実現したいこと</Badge><Heading mt={5} maxW="760px" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.5" fontWeight="500">世界で通用する専門性を、<br />人の健康に届く価値へ。</Heading><SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt={12}>{[["学部", "医療AIの基礎を固め、腸内細菌画像の解析と国内学会発表へ。"],["大学院", "国際会議・論文発表に挑み、ドイツ人工知能研究センター（DFKI）で研究する。"],["その先", "健康寿命の分野で国境を越えて共同研究し、社会に届く成果を生み出す。"]].map(([title,body]) => <Box key={title} borderTop="1px solid" borderColor="whiteAlpha.400" pt={6}><Text color="rose.200" fontWeight="bold">{title}</Text><Text mt={4} color="whiteAlpha.800" lineHeight="1.9">{body}</Text></Box>)}</SimpleGrid></Container></Box>
    </Box>

    <Box as="footer" bg="white" py={10}><Container maxW="6xl"><Flex direction={{ base: "column", sm: "row" }} gap={3} justify="space-between"><Text fontFamily="heading">Misato Hayashi</Text><Text color="gray.500" fontSize="sm">Research Portfolio</Text></Flex></Container></Box>
  </Box>;
}
