
"use client";
import { gql } from '@apollo/client';
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import * as React from 'react';
import '@/lib/env';

import CampaignCard from '@/components/campaignCard';



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
  launches(first:5) {
   CrowdFund_id
    targetAmount,
    startTime,
    endTime
  }
}
`

export default function HomePage() {
  // const client = getClient();
  // const { data } = await client.query({ query });
    const { data } = useSuspenseQuery(query);
  console.log("data ",data)

  return (
    <main>
 <CampaignCard id="1" startTime={123} endTime={123} targetAmount={4456} />
    </main>
  );
}
