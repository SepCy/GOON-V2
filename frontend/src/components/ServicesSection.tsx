import Image from 'next/image';
import React from 'react';
import Bubble from '../public/images/bubble.svg';
import Img1 from '../public/images/lecture.svg';

import ServiceGoon from '../public/images/servicegoon.svg';
import BgParticles from './BgParticles';

const ServicesSecion = () => {
  return (
    <div>
      <BgParticles />
      <div className="text-orange-500 lg:ml-32 lg:mt-24 lg:text-3xl">
        Les différents services de GOON
      </div>

      <div className=" lg:mt-8 lg:flex lg:w-full lg:items-center lg:justify-center">
        <div className=" lg:flex lg:justify-center">
          <div className="relative z-10  lg:my-24 lg:ml-2 lg:w-2/4">
            <span className="relative">
              {/* Tope Left */}
              <p>E-learning</p>

              <Image
                src={Img1}
                alt="Image 1"
                className="lg:absolute lg:left-1 lg:w-36 lg:rounded-full"
              />
            </span>

            <div className="lg:relative">
              <div className="lg:absolute lg:right-96 lg:top-72 lg:mr-16 ">
                Blog
              </div>
              <Image
                src={Img1}
                alt="Image 1"
                className="lg:right-86 lg:absolute lg:top-72 lg:-ml-8 lg:w-36 lg:rounded-full"
              />
            </div>
            <div className="lg:relative">
              {/*Right top */}
              <p className="lg:absolute lg:right-0 lg:top-0">Radio</p>
              <Image
                src={Img1}
                alt="Image 1"
                className="lg:absolute lg:top-12 lg:-right-16 lg:w-36 lg:rounded-full"
              />
            </div>

            {/*Right bottom */}
            <div className="lg:relative">
              <span className="lg:absolute lg:top-72 lg:left-16 lg:ml-96">
                Messagerie
              </span>
              <Image
                src={Img1}
                alt="Image 1"
                className="lg:absolute lg:top-72 lg:-right-8 lg:w-36 lg:rounded-full"
              />
            </div>

            <Image
              className=" lg:w-fit"
              src={ServiceGoon}
              alt="GOON presentation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesSecion;
