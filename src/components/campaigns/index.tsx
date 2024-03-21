import React from 'react'

import CampaignCard from '@/components/campaignCard';

interface IComponentProps {
  campaigns: any[];
}
const Campaigns: React.FC<IComponentProps> = ({ campaigns }) => {
  console.log(campaigns);
  return (
    <div className="flex gap-4 w-[75%] mx-auto">
      {campaigns?.map((campaign) => (
        <CampaignCard key={campaign.CrowdFund_id} id={campaign.CrowdFund_id} endTime={campaign.endTime} startTime={campaign.startTime} targetAmount={campaign.targetAmount} />
      ))}
    </div>
  )
}

export default Campaigns