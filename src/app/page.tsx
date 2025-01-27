import Image from 'next/image';
import bannerImg from '../../public/img/Blood-donation-amico.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full px-6 mx-auto flex flex-wrap flex-col justify-around lg:flex-row  pt-6 mt-6">
      <div className='flex flex-col justify-center items-center gap-2 py-5'>
        <span className='font-bold text-5xl'>
          Give the Gift of life
        </span>
        <span className='text-slate-400 text-2xl'>
          Your donation can save up to three lives.
        </span>
        <span className='text-slate-400 text-2xl'>
          Join our community of heroes and make a difference today.
        </span>
        <span className='flex flex-row items-center justify-center gap-2 my-5'>
          <Link href="/findblood">
            <Button variant={"blood"} size={"lg"} >Find Blood</Button>
          </Link>
          <Link href="/beadonor">
            <Button variant={"bloodrev"} size={"lg"} >Donate Blood</Button> 
          </Link>
        </span>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Image src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}