import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import BackgroundImage from '../../public/images/bubble.svg';
import { customLoader } from '@/lib/loader';

type Props = {
  data: any;
};

const SliderSection: React.FC<Props> = ({ data }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          //clearTimeout(timeout);
        }
        function nextTimeout() {
          // clearTimeout(timeout);

          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = true;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', nextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('dragStarted', nextTimeout);
      },
    ],
  );

  return (
    <div ref={sliderRef} className="keen-slider lg:relative lg:my-24">
      <Image
        className="lg:absolute lg:right-0 lg:top-0"
        alt="background"
        src={BackgroundImage}
      />
      <div className="keen-slider__slide number-slide1 flex items-center justify-between px-2 md:justify-between lg:flex lg:items-center lg:justify-between lg:px-24">
        <Image
          className=" w-2/4 md:w-2/4"
          alt="Boy with books"
          width={500}
          src={data?.slider_1?.image.toString().slice(39)}
          height={600}
          loader={customLoader}
        />
        <div className="w-2/5 pr-2 pl-2 text-orange-500 md:pl-8 md:pr-16 lg:w-2/4 lg:pr-32 lg:text-3xl">
          {data?.slider_1?.texte}
        </div>
      </div>

      <div className=" keen-slider__slide number-slide2 flex items-center justify-between px-2 md:justify-between lg:flex lg:items-center lg:justify-between lg:px-24">
        <Image
          className="w-2/4 md:w-2/4"
          alt="Boy with books"
          width={500}
          src={data?.slider_2?.image.toString().slice(39)}
          height={600}
          loader={customLoader}
        />
        <div className="w-2/5 pr-2 pl-2 text-orange-500 md:pl-8 md:pr-16 lg:w-2/4 lg:pr-32 lg:text-3xl">
          {data?.slider_2?.texte}
        </div>
      </div>
      <div className="keen-slider__slide number-slide3 flex items-center justify-between px-2 md:justify-between lg:flex lg:items-center lg:justify-between lg:px-24">
        <Image
          alt="Boy with books"
          className=" w-2/4 md:w-2/4"
          width={500}
          height={600}
          src={data?.slider_3?.image.toString().slice(39)}
          loader={customLoader}
        />
        <div className="w-2/5 pr-2 pl-2 text-orange-500 md:pl-8 md:pr-16 lg:w-2/4 lg:pr-32 lg:text-3xl">
          {data?.slider_3?.texte}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
