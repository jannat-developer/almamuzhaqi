'use client';

import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SlideCard from './SlideCard';
import Link from 'next/link';
import Image from 'next/image';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

const slides = [
  {
    title: 'Business Overview',
    companyName: 'InnovateX/',
    companyTag: 'Early stage paper company',
    content: `Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper.
    Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet.
    Mauris lobortis ut arcu ut elementum. Fames pretium cursus feugiat felis consectetur ornare tempus.
    Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus.
    Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis. Euismod nulla a blandit magna viverra.
    Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. 
    Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.
    Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. 
    Semper scelerisque vestibulum blandit aliquet tincidunt.`
  },
  {
    title: 'Business Origins',
    companyName: 'InnovateX/',
    companyTag: 'Early stage paper company',
    content: `Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper.
    Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet.
    Mauris lobortis ut arcu ut elementum. Fames pretium cursus feugiat felis consectetur ornare tempus.
    Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus.
    Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis. Euismod nulla a blandit magna viverra.
    Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. 
    Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.
    Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. 
    Semper scelerisque vestibulum blandit aliquet tincidunt.`
  },
  {
    title: 'Competitive Advantage',
    companyName: 'InnovateX/',
    companyTag: 'Business Origins',
    content: `Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper.
    Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet.
    Mauris lobortis ut arcu ut elementum. Fames pretium cursus feugiat felis consectetur ornare tempus.
    Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus.
    Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis. Euismod nulla a blandit magna viverra.
    Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. 
    Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.
    Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. 
    Semper scelerisque vestibulum blandit aliquet tincidunt.`
  },
  // Add more slides here if needed
];

export default function PresentationSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };



  return (
    <div className='min-h-screen'>
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h3 className="text-black font-medium text-2xl">Business AI Plan</h3>
          </div>
        </Link>

        <Link href="/my-plan">
          <button className="border px-16 py-2 rounded-lg text-black font-medium">
            Back
          </button>
        </Link>


      </div>
      <div className=" bg-black/80">

        <div className="flex items-center justify-center  py-30">
          <button onClick={prevSlide} disabled={currentSlide === 0} className="text-white p-2">
            <GoTriangleLeft size={48} />
          </button>

          <SlideCard slide={slides[currentSlide]} index={currentSlide} total={slides.length} />

          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="text-primary p-2">
            <GoTriangleRight size={48} />
          </button>
        </div>
      </div>
    </div>
  );
}
