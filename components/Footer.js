import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/">
              <a className="font-bold text-xl text-white">{t('shopName')}</a>
            </Link>
            <p className="text-sm mt-2">{t('copyright')}</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end mt-4 md:mt-0">
            <Link href="/">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('home')}</a>
            </Link>
            <Link href="/products">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('products')}</a>
            </Link>
            <Link href="/repairs">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('repairs')}</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('about')}</a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('blog')}</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-300 hover:text-white px-4 py-2 mx-2 rounded-md">{t('contact')}</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;