"use client";

import Head from 'next/head';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Define the props interface for the Modal component
interface ModalProps {
  isOpen: boolean;
  images: string[];
  closeModal: () => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, images, closeModal, currentIndex, setCurrentIndex }) => {
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      goToNextImage();
    } else if (event.key === "ArrowLeft") {
      goToPrevImage();
    } else if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]); // Dependency on isOpen

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative max-w-3xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[currentIndex]}
          alt={`Full Image ${currentIndex + 1}`}
          layout="responsive"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <button className="absolute top-0 right-0 m-4 text-white" onClick={closeModal} aria-label="Close Modal">
          &times;
        </button>
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" onClick={goToPrevImage} aria-label="Previous Image">
          &#9664;
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white" onClick={goToNextImage} aria-label="Next Image">
          &#9654;
        </button>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: string[] = Array.from({ length: 18 }, (_, index) => `/temple/${index + 1}.jpg`);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentIndex(0);
  };

  return (
    <>
      <Head>
        <title>Gallery - Hindu Temple</title>
        <meta name="description" content="Explore the gallery of our Hindu Temple, showcasing beautiful moments from our worship and community events." />
      </Head>
      <main className="flex-1 p-1">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-heading text-coral flex items-center" id="modal-title">
            <FaInfoCircle className="mr-2" /> Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Temple Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => openModal(index)}
                />
              </div>
            ))}
          </div>
        </section>

        <Modal isOpen={isOpen} images={images} closeModal={closeModal} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </main>
    </>
  );
};

export default Gallery;
