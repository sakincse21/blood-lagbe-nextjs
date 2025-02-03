import Image from 'next/image';
import bannerImg from '../../public/img/Blood-donation-amico.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-auto min-h-full w-full px-6 mx-auto flex flex-wrap flex-col justify-around lg:flex-row  pt-6 my-8">
      <div className='flex flex-col justify-center items-center gap-2 py-5 mt-5 lg:mt-0'>
        <span className='font-bold text-2xl mb:text-3xl lg:text-5xl'>
          Give the Gift of life
        </span>
        <span className='text-lg mb:text-xl lg:text-2xl text-center'>
          Your donation can save up to three lives.
        </span>
        <span className='text-lg mb:text-xl lg:text-2xl text-center'>
          Join our community of heroes and make a difference today.
        </span>
        <span className='flex flex-row items-center justify-center gap-2 my-5'>
          <Link href="/findblood">
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-xl text-white font-semibold transition duration-300 rounded whitespace-nowrap bg-[var(--blood-color)] hover:bg-[var(--blood-color-hover)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
              <span>Find Blood</span>
            </button>
          </Link>
          <Link href="/sign-up/">
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-xl text-white font-semibold  transition duration-300 rounded whitespace-nowrap bg-[var(--blood-color)] hover:bg-[var(--blood-color-hover)] focus:bg-[var(--blood-color)] focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none">
              <span>Be a Donor</span>
            </button>
          </Link>
        </span>
      </div>
      <div className='flex flex-row items-center justify-center w-50 '>
        <Image src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}