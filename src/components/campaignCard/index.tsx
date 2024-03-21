import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react'

import CampaignDetails from '@/components/campaignDetails';

interface IComponentProps {
  id: string;
  startTime: number;
  endTime: number;
  targetAmount: number
}
const CampaignCard: React.FC<IComponentProps> = ({ id, startTime, endTime, targetAmount }) => {
  const [isCampaignEnded, setIsCampaignEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedCampaignId, setSelectedCampaignId] = useState<any>(null);
  const intervalIdRef = useRef<any>(null);

  useEffect(() => {
    const hasCampaignEnded = new Date().getTime() - endTime >= 0 ? true : false
    if(hasCampaignEnded) {
    setIsCampaignEnded(true);
    } else {
      const msLeft = endTime - new Date().getTime();
      const secsLeft = Math.floor(msLeft / 1000); //milliseconds -> seconds
      setTimeLeft(secsLeft);
    }
  }, [startTime, endTime])

  useEffect(() => {
    if(timeLeft) {
            const intervalId = setInterval(() => {
              console.log("REDUCING!!", timeLeft)
        setTimeLeft((t) => t- 1);
      }, 1000)
    intervalIdRef.current = intervalId
    }


    return () => {
      clearInterval(intervalIdRef?.current);
    }
  }, [timeLeft, intervalIdRef?.current])
  return (
    <>
    <div className='rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col justify-start items-center cursor-pointer'
      onClick={() => { setSelectedCampaignId(id) }}
    >
      <h3 className='text-lg text-black font-bold'>Campaign {`${id}`}</h3>
      {isCampaignEnded ? (
        <h3 className='text-lg text-black font-bold'>Ended</h3>
      ): (
        <div ref={intervalIdRef}>{dayjs( Math.floor(new Date().getTime() / 1000) + timeLeft, 'ss').format('hh:mm:ss')}</div>
      )}
    </div>
    {selectedCampaignId && <CampaignDetails campaignId={id} hideCampaignDetails={() => setSelectedCampaignId(null)} />}
    </>
  )
}

export default CampaignCard