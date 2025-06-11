// app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Welcome to Your Mindfulness Journal
      </h1>

      <p className="max-w-xl text-lg text-gray-300 mb-8 text-center">
        This journal is inspired by Mindfulness-Based Stress Reduction (MBSR), a
        scientifically researched method developed by Dr. Jon Kabat-Zinn. Practicing
        mindfulness has been shown to reduce stress, improve mental clarity, and promote
        emotional well-being.
      </p>

      <p className="max-w-xl text-md text-gray-400 mb-8 text-center">
        Each day, you'll find a new quote, mindfulness prompt, and space to journal.
        You can also listen to calming white noise, and protect your entries with a lock screen.
      </p>

      <Link href="/day/1">
        <button className="bg-white text-black px-6 py-3 rounded-2xl shadow hover:bg-gray-300 transition">
          Start Day 1
        </button>
      </Link>
    </div>
  );
}
