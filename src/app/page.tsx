// File: src/app/page.tsx

import { redirect } from 'next/navigation';

export default function LandingPage() {
  // This immediately sends the user to your 'Aim' page
  redirect('/experiments/electrical-comparator/Aim');
}