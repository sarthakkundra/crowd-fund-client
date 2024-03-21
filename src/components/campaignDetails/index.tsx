import React, { useEffect, useState } from 'react'
import { useReadContract } from 'wagmi';

import abi from "../../../public/abis/crowdFund";

interface IComponentProps {
  campaignId: string,
  hideCampaignDetails: () => void;
}
const CampaignDetails: React.FC<IComponentProps> = ({ campaignId, hideCampaignDetails }) => {
  const [campaignData, setCampaignData] = useState<any>(null);
  const result = useReadContract({
    abi,
    address: '0xa9624d3A47F845bfAC1a91ACC1b7626B614F5E11',
    functionName: 'campaigns',
    args: [Number(campaignId)],
  })

  useEffect(() => {
    console.log({result: result.data})
    if(result.data) {
      setCampaignData(result.data);
    }
  }, [result])


  return (
    <>

    <div id="modal" className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal">
    <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">


        <div className="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2">
            <h3>Modal header</h3>
            <button onClick={hideCampaignDetails}>x</button>
        </div>

        {/* <h1>Target Amount {campaignData[1]}</h1> */}
        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={hideCampaignDetails}>Close (ESC)</button>
        </div>
    </div>
</div>

</>
  )
}

export default CampaignDetails;