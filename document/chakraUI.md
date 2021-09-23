## chakraUI の適用
chakraUI の利用するにはトップのコンポーネントにて<ChakraProvider>を使う

```ts
<ChakraProvider>
  <Button colorScheme="teal">ボタン</Button>
</ChakraProvider>
```

## chakraUI のグローバルスタイル適用
以下を作成してプロバイダーに theme を渡す

```ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      backgroudColor: "gray:100",
      color: "gray.800"
    }
  }
});
export default theme;
```
