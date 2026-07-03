"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: { global: { "html, body": { background: "#fffafb", color: "#30292b" }, "::selection": { background: "#f2cbd5" } } },
  fonts: { heading: '"Yu Mincho", "Hiragino Mincho ProN", serif', body: '"Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif' },
  colors: { rose: { 50: "#fff7f9", 100: "#fdebf0", 200: "#f7d6df", 300: "#eeb8c7", 500: "#b85f78", 700: "#753647" }, ink: "#30292b", sage: "#73877b" },
  components: { Button: { baseStyle: { borderRadius: "4px", fontWeight: 600 }, defaultProps: { colorScheme: "pink" } }, Input: { defaultProps: { focusBorderColor: "rose.500" } } },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
