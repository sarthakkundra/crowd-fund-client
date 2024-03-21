
"use client";
import { gql } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react';
import { WagmiProvider } from 'wagmi';
import '@/lib/env';

import Campaigns from '@/components/campaigns';

import  config  from '../wagmi/client';





/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const query = gql`
query GetCampaigns {
  launches(first:10) {
   CrowdFund_id
    targetAmount,
    startTime,
    endTime
  }
}
`

export default function HomePage() {
  const [campaigns, setCampaigns] = React.useState<any>(null);
  const queryClient = new QueryClient() 
  // const client = getClient();
  // const { data } = await client.query({ query });
    const { data } = useSuspenseQuery(query);

  React.useEffect(() => {
    setCampaigns(data?.launches);
  }, [data])

  return (
     <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
    <main>
 {/* <CampaignCard id="1" startTime={123} endTime={123} targetAmount={4456} /> */}
 <Campaigns campaigns={campaigns as any} />
    </main>
              </QueryClientProvider>
      </WagmiProvider>
  );
}
