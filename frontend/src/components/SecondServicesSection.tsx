import React from 'react';
import ServiceCard from './ServiceCard';
import Kolibri from '../../public/images/Books.png';
import Kiwix from '../../public/images/kiwix.png';
import Ludo from '../../public/images/ludo.png';
import RocketChat from '../../public/images/rocketchat.png';
import Scratch from '../../public/images/scratch.png';
import Radio from '../../public/images/Radio.png';
import Video from '../../public/images/video.png';
import {
  KIWIX_LINK,
  KOLIBRI_LINK,
  LUDO_LINK,
  RADIO_LINK,
  ROCKETCHAT_LINK,
  SCRATCH_LINK,
  VIDEOS_LINK,
} from '@/lib/url';

export const SecondServicesSection = () => {
  return (
    <div className="z-10 mx-8 my-12 md:mx-24">
      <div className="ml-0 mb-4 w-full pb-4 text-xl text-orange-500 lg:ml-16 lg:w-2/4 lg:text-3xl">
        <p>Les services de GOON </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <ServiceCard
          title="KOLIBRI"
          description="Accedez à des milliers de contenus éducatifs gratuitement et sans internet"
          link={KOLIBRI_LINK}
          icon={Kolibri}
        />
        <ServiceCard
          title="KIWIX"
          description="Accedez à des milliers de contenus éducatifs gratuitement et sans internet"
          link={KIWIX_LINK}
          icon={Kiwix}
        />

        <ServiceCard
          title="LUDO"
          description="Divertissez vous avec le jeu Ludo, vous pouvez jouer seuls ou en réseau"
          link={LUDO_LINK}
          icon={Ludo}
        />

        <ServiceCard
          title="MESSAGERIE ou SMS"
          description="Echangez des messages, fichiers et mêmes des messages vocaux grâce à ce service"
          link={ROCKETCHAT_LINK}
          icon={RocketChat}
        />

        <ServiceCard
          title="RADIO"
          description="Ecouter la radio pour être informé des différentes informations de votre communauté"
          link={RADIO_LINK}
          icon={Radio}
        />

        <ServiceCard
          title="SCRATCH"
          description="Apprenez la programmation informatique grâce au langage scratch hors ligne"
          link={SCRATCH_LINK}
          icon={Scratch}
        />

        <ServiceCard
          title="VIDEOS"
          description="Accedez à des milliers de contenus vidéos informatives gratuitement et sans internet"
          link={VIDEOS_LINK}
          icon={Video}
        />
      </div>
    </div>
  );
};
