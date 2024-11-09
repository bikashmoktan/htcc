"use client"; // Ensure this component is client-side

import Image from 'next/image';
import { FaCalendarAlt, FaEnvelope, FaInfoCircle } from 'react-icons/fa';
import React from 'react';

export default function Home() {
  // Explicitly type the event parameter as React.MouseEvent
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent right-click menu
  };

  return (
    <>
      <main className="flex-1 p-0 md:p-6 space-y-10">
        {/* Main Card Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* About Us Card */}
          <div className="bg-orange-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-heading text-darkBrown flex items-center">
              <FaInfoCircle className="mr-2" /> About Us
            </h2>
            <p className="mt-4 text-lg font-body text-darkBrown">
              The Hindu Temple and Cultural Center of South Carolina is a sanctuary for the Hindu community, providing a space for worship, prayer, and cultural enrichment. We unite thousands to celebrate our traditions and perform sacred rituals.
            </p>
          </div>

          {/* Community Services Card */}
          <div className="bg-yellow-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-heading text-darkBrown flex items-center">
              <FaCalendarAlt className="mr-2" /> Community Services
            </h2>
            <p className="mt-4 text-lg font-body text-darkBrown">
              Our temple is committed to uplifting our community through humanitarian initiatives, educational programs, and cultural events, fostering a sense of belonging and support.
            </p>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-green-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-heading text-darkBrown flex items-center">
              <FaCalendarAlt className="mr-2" /> Upcoming Events
            </h2>
            <ul className="mt-4 space-y-4 text-darkBrown">
              <li className="text-lg font-body">
                <span className="font-bold">✨ Diwali Celebration</span> - 
                <span className="text-gray-700"> November 10, 2024, at 6:00 PM</span>
                <p className="text-sm text-gray-600">Join us for an evening of festivities with prayers, dance, and a community feast.</p>
                <a href="/events/diwali" className="text-coral underline hover:text-coral-dark">Learn More</a>
              </li>
              <li className="text-lg font-body">
                <span className="font-bold">🌼 Holi Festival</span> - 
                <span className="text-gray-700"> March 25, 2024, from 11:00 AM to 4:00 PM</span>
                <p className="text-sm text-gray-600">Celebrate the festival of colors with music, dance, and delicious food. Everyone is welcome!</p>
                <a href="/events/holi" className="text-coral underline hover:text-coral-dark">Learn More</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch Card */}
          <div className="bg-red-200 p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-heading text-darkBrown flex items-center">
              <FaEnvelope className="mr-2" /> Get in Touch
            </h2>
            <p className="mt-4 text-lg font-body text-darkBrown">
              For inquiries, please reach out to us at:
              <a href="mailto:info@hindutemple.com" className="text-blue-500 hover:underline"> info@hindutemple.com</a>
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-heading text-coral flex items-center">
            <FaInfoCircle className="mr-2" /> Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 18 }, (_, index) => (
              <div key={index} className="relative w-full h-80" onContextMenu={handleContextMenu}>
                <Image
                  src={`/temple/${index + 1}.jpg`}
                  alt={`Temple Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
