# Next.js

{% hint style="success" %}
**MUI**: Theses instructions are for the peoples using `tss-react` as a standalone solution. &#x20;

MUI users can refer to [the MUI documentation relative to SSR](https://mui.com/material-ui/guides/server-rendering/) and ignore this.&#x20;
{% endhint %}

{% hint style="info" %}
Next.js + React 18 -> SSR will only work with Next.js 12.1.7-canary.4 or newer.
{% endhint %}

Setup to make SSR work with [Next.js](https://nextjs.org).

```
yarn add @emotion/server
```

```tsx
//pages/_app.tsx

import Head from "next/head";
import type { AppProps } from 'next/app'
import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";

const { 
    EmotionCacheProvider, 
    withEmotionCache 
} = createEmotionSsrAdvancedApproach(
    { "key": "css" } /* Argument of createCache */
);

export { withEmotionCache };

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <EmotionCacheProvider>
                <Component {...pageProps} />
            </EmotionCacheProvider>
        </>
    );
}
```

```tsx
//pages/_document.tsx

import Document from "next/document";
import { withEmotionCache } from "./_app";

export default withEmotionCache(Document);

// If there are some other emotion caches in use in your aplication
// you should provide them using:
// export default withEmotionCache(
//     Document, 
//     { "getExtraCaches": ()=> [ cache1, cache2, ... ] }
// ); 
```

{% hint style="danger" %}
If you are using nested selectors, you may need to provide [uniq identifiers to your stylesheet](../nested-selectors.md#ssr).
{% endhint %}
