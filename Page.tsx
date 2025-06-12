// app/page.tsx

import React from 'react'; import Link from 'next/link';

export default function IntroPage() { return ( <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center"> <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center"> Welcome to Your Mindfulness Journal </h1>

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

); }

// app/day/[day].tsx

import { useRouter } from 'next/router'; import { useState } from 'react';

const quotes = [ "You can't stop the waves, but you can learn to surf. – Jon Kabat-Zinn", "The present moment is the only time over which we have dominion. – Thích Nhất Hạnh", "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. – Thích Nhất Hạnh", ];

const prompts = [ "What are you feeling right now in your body?", "What thoughts are present? Try not to judge them.", "What is something you're grateful for today?", ];

export default function JournalEntry() { const router = useRouter(); const day = parseInt(router.query.day as string || '1', 10);

const quote = quotes[day % quotes.length]; const prompt = prompts[day % prompts.length];

const [entry, setEntry] = useState(''); const [mood, setMood] = useState('');

return ( <div className="min-h-screen bg-black text-white p-6 space-y-6"> <h2 className="text-xl font-semibold text-gray-200">Day {day}</h2>

<blockquote className="text-lg italic text-gray-400 border-l-4 border-white pl-4">
    {quote}
  </blockquote>

  <div>
    <label className="block text-sm text-gray-300 mb-1">Mood:</label>
    <select
      value={mood}
      onChange={(e) => setMood(e.target.value)}
      className="bg-gray-800 border border-gray-600 text-white rounded p-2 w-full"
    >
      <option value="">Select your mood</option>
      <option value="happy">😊 Happy</option>
      <option value="calm">😌 Calm</option>
      <option value="anxious">😰 Anxious</option>
      <option value="tired">😴 Tired</option>
      <option value="sad">😢 Sad</option>
    </select>
  </div>

  <div>
    <label className="block text-sm text-gray-300 mb-1">Prompt:</label>
    <p className="text-gray-400 mb-2">{prompt}</p>
    <textarea
      className="bg-gray-900 text-white border border-gray-600 rounded w-full p-4 h-48"
      value={entry}
      onChange={(e) => setEntry(e.target.value)}
      placeholder="Write your thoughts here..."
    />
  </div>

  <button
    className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-300 transition"
    onClick={() => alert('Entry saved (to be implemented)')}
  >
    Save Entry
  </button>
</div>

); }

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
}// app/page.tsx
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
