import React from 'react'

interface IComponentProps {
  id: string;
  startTime: number;
  endTime: number;
  targetAmount: number
}
const CampaignCard: React.FC<IComponentProps> = ({ id, startTime, endTime, targetAmount }) => {
  return (
    <div className='rounded-lg pppx-4 py-8 flex flex-col justify-center items-start shadow-md'>
      <h3 className='text-lg text-black font-bold'>Campaign {`${id}`}</h3>
    </div>
  )
}

export default CampaignCard