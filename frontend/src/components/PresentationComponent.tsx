'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Bubble from '../../public/images/bubble.svg';
import Goon from '../../public/images/goon.svg';
import Button from './Button';
import Link from 'next/link';
import { customLoader } from '@/lib/loader';

type Props = {
  data: any;
};

const PresentationComponent: React.FC<Props> = ({ data }) => {
  const [state, setState] = useState(1);

  return (
    <div className="flex w-full flex-col items-center  md:w-full md:flex-row md:items-center">
      <div className=" flex md:flex">
        <Image
          className="absolute z-0 lg:absolute"
          width={200}
          src={Bubble}
          alt="Bubble background"
        />
        <Image
          className=" absolute right-0 bottom-0 z-0 lg:absolute lg:bottom-0 lg:right-0"
          src={Bubble}
          width={200}
          alt="Bubble background"
        />
        <div className="relative z-10 my-4  ml-16 lg:my-24 lg:ml-48 ">
          <span>
            <Image
              src={data?.service_1?.image.toString().slice(39)}
              loader={customLoader}
              alt="Image 1"
              width={100}
              height={100}
              onClick={() => setState(1)}
              className={
                state === 1
                  ? ` absolute  left-4 w-16 border-spacing-4 scale-150 rounded-full border border-white bg-orange-100 shadow-md sm:w-32`
                  : `delay-50 absolute left-4  w-16 scale-125 animate-wiggle cursor-pointer rounded-full border border-white  bg-orange-100 transition   duration-200 ease-in-out hover:scale-150 sm:w-32`
              }
            />
          </span>

          <span>
            <Image
              src={data?.service_2?.image.toString().slice(39)}
              loader={customLoader}
              alt="Image 2"
              width={100}
              height={100}
              onClick={() => setState(2)}
              className={
                state === 2
                  ? ` absolute bottom-8 -left-8 w-24 scale-150 cursor-pointer rounded-full border border-solid border-white bg-orange-100 shadow-md transition duration-200 ease-in-out  hover:scale-150 sm:w-32 `
                  : `absolute bottom-8 -left-8 w-24 scale-125 animate-wiggle cursor-pointer rounded-full border   border-solid border-white bg-orange-100 transition duration-200 hover:scale-150 sm:w-32`
              }
            />
          </span>
          {/* Top right*/}
          <span>
            <Image
              src={data?.service_3?.image.toString().slice(39)}
              loader={customLoader}
              alt="Image 3"
              width={100}
              height={100}
              onClick={() => setState(3)}
              className={
                state === 3
                  ? ` absolute top-2 right-8 h-24 w-24 scale-125 cursor-pointer rounded-full border border-solid border-white bg-orange-100 shadow-md transition duration-200 ease-in-out hover:scale-125 sm:h-36 sm:w-36 `
                  : `absolute top-2 right-8 h-24 w-24 animate-wiggle cursor-pointer rounded-full border border-solid border-white  bg-orange-100 transition duration-200 hover:scale-125 sm:h-36 sm:w-36`
              }
            />
          </span>
          {/* Bottom right*/}
          <span>
            <Image
              src={data?.service_4?.image.toString().slice(39)}
              loader={customLoader}
              alt="Image 4"
              width={100}
              height={100}
              onClick={() => {
                setState(4);
              }}
              className={
                state === 4
                  ? `  absolute right-4 bottom-4 h-24 w-24 scale-125 cursor-pointer rounded-full border border-solid border-white bg-orange-100 shadow-md transition duration-200 ease-in-out hover:scale-125 sm:right-16 sm:h-36 sm:w-36`
                  : ` absolute bottom-4 right-4 h-24 w-24 animate-wiggle cursor-pointer rounded-full border border-solid  border-white bg-orange-100  transition duration-200 hover:scale-125 sm:right-16 sm:h-36 sm:w-36`
              }
            />
          </span>

          <Image className="w-5/6" src={Goon} alt="GOON presentation" />
        </div>
      </div>
      {state === 1 ? (
        <div className="mx-8 w-fit md:ml-24 md:w-1/4">
          <h1 className="text-xl font-bold text-orange-500 lg:text-3xl lg:font-bold">
            {data?.service_1?.titre}
          </h1>

          <p className=" my-4 md:my-8">{data?.service_1?.description}</p>

          <div>
            <Link href={data ? data?.service_1?.lien_url : ''} target="_blank">
              <Button kind="default">Ecouter la radio</Button>
            </Link>
          </div>
        </div>
      ) : state === 2 ? (
        <div className="mx-8 w-fit md:ml-24 md:w-1/4">
          <h1 className="text-xl font-bold text-orange-500 lg:text-3xl lg:font-bold">
            {data?.service_2?.titre}
          </h1>

          <p className="my-4 lg:my-8">{data?.service_2?.description}</p>

          <div>
            <Link href={data?.service_2?.lien_url}>
              <Button kind="default">Apprendre des cours</Button>
            </Link>
          </div>
        </div>
      ) : state === 3 ? (
        <div className="mx-8 w-fit md:ml-24 md:w-1/4">
          <h1 className="text-xl font-bold text-orange-500 lg:text-3xl lg:font-bold">
            {data?.service_3?.titre}
          </h1>

          <p className=" my-4 lg:my-8">{data?.service_3?.description}</p>

          <Link href={data?.service_3?.lien_url}>
            <Button kind="default">Actualités</Button>
          </Link>
        </div>
      ) : (
        <div className="mx-8 w-fit md:ml-24 md:w-1/4">
          <h1 className="text-xl font-bold text-orange-500 lg:text-3xl lg:font-bold">
            {data?.service_4?.titre}
          </h1>

          <p className=" lg:my-8">{data?.service_4?.description}</p>

          <Link href={data?.service_4?.lien_url}>
            <Button kind="default">Commencer</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PresentationComponent;
