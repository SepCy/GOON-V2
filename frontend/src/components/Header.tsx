import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/images/Logo.svg';
import Banniere from '../../public/images/homeImage.png';
import { GrMenu } from 'react-icons/gr';
import { customLoader } from '@/lib/loader';
import { useRouter } from 'next/navigation';
import InternetForm from './InternetForm';

type Props = {
  type?: string;
  image?: any;
};

const Header: React.FC<Props> = ({ type, image }) => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  return (
    <div
      className={
        type === 'services' && 'blog'
          ? ` absolute  left-0 right-0 -top-1 z-50 flex items-baseline  justify-between shadow-md md:absolute md:left-0 md:right-0 md:-top-1 md:flex md:items-baseline md:justify-between lg:absolute lg:left-0 lg:right-0 lg:flex lg:items-center lg:justify-between lg:text-white`
          : `absolute right-0 left-0 top-0 z-50 flex justify-between md:absolute md:right-0 md:left-0 md:top-0 md:flex md:justify-between lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:flex lg:justify-between lg:text-white `
      }
    >
      {type === 'services' ? (
        <div className="absolute top-0 left-0 h-64 w-full bg-cover">
          {image ? (
            <Image
              src={image}
              style={{ objectFit: 'cover' }}
              fill
              alt="Banniere"
              className=" h-64"
              loader={customLoader}
            />
          ) : (
            <Image
              src={Banniere}
              style={{ objectFit: 'cover' }}
              fill
              alt="Banniere"
              className=" h-64"
            />
          )}
        </div>
      ) : (
        ''
      )}

      <Link className="z-50 lg:z-10" href="/">
        <Image height={150} width={150} src={Logo} alt="Logo" />
      </Link>
      <GrMenu
        className="absolute top-4 right-4 z-50 cursor-pointer  rounded-md bg-white p-2  text-3xl shadow-md lg:hidden"
        onClick={() => setOpen(!open)}
      />
      <div
        className={
          type === 'services'
            ? open
              ? ` visible z-10 flex h-96 w-fit   flex-col justify-between bg-white   px-16 py-16 shadow-lg transition duration-200 ease-in-out lg:z-10 lg:hidden lg:w-1/4  lg:justify-between lg:pt-2`
              : ` z-10 hidden h-fit w-fit translate-x-full  flex-col justify-between bg-white px-16   py-16 shadow-lg transition duration-200 ease-in-out lg:z-10 lg:hidden lg:w-1/4  lg:justify-between lg:pt-2`
            : open
            ? `visible relative flex h-96 w-fit flex-col justify-between bg-white px-16   py-16 shadow-lg  transition  duration-200 ease-in-out lg:z-10 lg:hidden lg:justify-between lg:pt-6 lg:text-white`
            : `relative  hidden h-96 w-fit translate-x-full flex-col justify-between bg-white px-16 py-16 shadow-lg  transition  duration-200  ease-in-out lg:z-10 lg:hidden lg:justify-between lg:pt-6 lg:text-white`
        }
      >
        <Link className="hover:text-orange-500" href="/">
          Accueil
        </Link>

        <Link className="hover:text-orange-500" href="/services">
          Services
        </Link>

        <Link className="hover:text-orange-500 lg:mr-16" href="/blog">
          Informations
        </Link>
      </div>

      <div
        className={
          type === 'services'
            ? ` z-10 hidden sm:hidden md:hidden lg:z-10 lg:flex lg:w-4/12  lg:justify-between lg:pt-2 xl:w-3/12`
            : `relative z-10 hidden sm:hidden md:hidden  lg:z-10 lg:flex lg:w-4/12  lg:justify-between lg:pt-6 lg:text-white xl:w-3/12`
        }
      >
        <Link className="hover:text-orange-500" href="/">
          Accueil
        </Link>

        <Link className="hover:text-orange-500" href="/services">
          Services
        </Link>

        <div className=" ">
          <div
            className="relative cursor-pointer hover:text-orange-500"
            onClick={(state) => setToggle(!toggle)}
          >
            Internet
          </div>
          {toggle ? <InternetForm /> : ''}
        </div>

        <Link className="hover:text-orange-500 lg:mr-16" href="/blog">
          Informations
        </Link>
      </div>
    </div>
  );
};

export default Header;
