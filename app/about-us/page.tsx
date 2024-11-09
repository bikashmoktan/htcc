"use client"; // Ensure this component is client-side

import Head from 'next/head';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Hindu Temple</title>
        <meta 
          name="description" 
          content="Learn about the Hindu Temple and Cultural Center of South Carolina, its mission, and community activities." 
        />
      </Head>
      <main className="flex-1 p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-heading text-coral flex items-center">
            <FaInfoCircle className="mr-2" /> About Us
          </h2>
          <div className="relative h-96 w-full mt-4 mb-6 rounded-lg overflow-hidden">
            <Image
              src="/temple/11.jpg"
              alt="Hindu Temple"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <p className="mt-4 text-lg">
            The Hindu Temple and Cultural Center of South Carolina was established with an objective to fill in the need for thousands of Hindus in the State of South Carolina to worship and pray together, perform sacraments and rituals, observe and celebrate festivals, and perform humanitarian and educational activities.
          </p>
          <p className="mt-4 text-lg">
            Ever since the temple activities started, the temple has been increasingly serving the Hindus and the wider community in a dynamic way. It is active in inter-religious activities, both cultural and humanitarian. Students of schools and colleges visit the temple to learn about Hindu ideals, traditions, and practices.
          </p>
          <p className="mt-4 text-lg">
            Once a year, we celebrate the &quot;India Day&quot; in which the general public is invited to attend Indian dance, music, and taste Indian delicacies. This provides opportunities to understand and appreciate mutual cultures. The temple provides opportunities for open house worship.
          </p>
        </section>
      </main>
    </>
  );
}
