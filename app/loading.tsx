import { Skeleton } from '../components/ui/skeleton';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className=''>
        {/* <div className='flex justify-center'> 
        <Skeleton  className="w-[95dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        </div>
        <div className='flex justify-center mt-1'> 
        <Skeleton  className="w-[95dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        </div>
        <div className='flex justify-center gap-1 p-10'> 
        <Skeleton  className="w-[90dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        <Skeleton  className="w-[90dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        </div>
        <div className='flex justify-center gap-1 p-10'> 
        <Skeleton  className="w-[90dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        <Skeleton  className="w-[90dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        <Skeleton  className="w-[90dvw] h-[5dvh]  rounded-[10px] bg-[#90b6cf]" />
        </div> */}
        <div className='grid grid-cols-2 gap-1 p-10'>
        <Skeleton  className=" h-[45dvh]  rounded-[10px] bg-[#dadada]" />
        <Skeleton  className=" h-[45dvh]  rounded-[10px] bg-[#999999]" />
        <Skeleton  className=" h-[45dvh]  rounded-[10px] bg-[#999999]" />
        <Skeleton  className=" h-[45dvh]  rounded-[10px] bg-[#dadada]" />
        </div>
        </div>
)
  }