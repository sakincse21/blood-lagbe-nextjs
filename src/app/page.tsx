import Image from 'next/image';
import bannerImg from '../../public/img/Blood-donation-amico.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-full w-full px-6 mx-auto flex flex-wrap flex-col justify-around lg:flex-row  pt-6 my-8">
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
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-slate-500 hover:bg-[var(--blood-color)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
              <span>Find Blood</span>
            </button>
          </Link>
          <Link href="/sign-up/">
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-lg font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-slate-500 hover:bg-[var(--blood-color)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
              <span>Be a Donor</span>
            </button>
          </Link>
        </span>
      </div>
      <div className='flex flex-row items-center justify-center'>
        <Image src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}