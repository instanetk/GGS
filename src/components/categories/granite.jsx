import React from 'react';
import { useTranslation } from 'react-i18next';
import CardScroll from '../common/cardScroll';
import SecondaryHero from '../common/secondaryHero';
import Testimonial from '../common/testimonial';
import ServiceAddress from '../serviceAddress';
import ThankYou from '../thankYou';

const Granite = () => {
  const { t } = useTranslation();
  const [submitted, setState] = React.useState(false);

  const sayThanks = () => {
    setState(!submitted);
  };

  const service = t('cat.granite');

  const style = {
    hero: '-mt-6 sm:mt-0',
    services: '-mt-10 sm:mt-0 sm:ml-5 sm:flex-col sm:justify-center sm:px-14',
    testimonial: 'px-4 sm:-mt-8 sm:px-20',
    content: 'mt-0 pb-0 text-gray-800 tracking-wide text-justify text-lg select-none',
    p: 'px-4 sm:px-20 mt-2 flex-wrap',
    categories: 'py-10 -mt-0 sm:ml-20',
    address: 'sm:py-10 sm:ml-0',
  };

  return (
    <main>
      <div id="hero" className={style.hero}>
        <SecondaryHero
          text1={t('granite.1')}
          text2={t('granite.2')}
          tagline={t('secondaryHero.tagline')}
          color="text-yellow-400"
          image="catGranite"
        />
      </div>
      <div>
        <div id="services" className={style.services}>
          <CardScroll which="useService" category="granite" />
        </div>
        <div id="content" className={style.content}>
          <p className={style.p}>{t('granite.text')}</p>
        </div>
        <div id="address" className={style.address}>
          {submitted ? <ThankYou /> : <ServiceAddress sayThanks={sayThanks} service={service} />}
        </div>
        <div id="testimonial" className={style.testimonial}>
          <Testimonial />
        </div>
      </div>
      <div id="categories" className={style.categories}>
        <CardScroll name={t('home.category')} which="useCategories" />
      </div>
    </main>
  );
};

export default Granite;
