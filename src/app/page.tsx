// File: .\src/app/page.tsx
// This file is the application entry point ('/') and will redirect to the default "Aim" page.

import { redirect } from 'next/navigation';

// Next.js Server Component (no "use client" needed)
export default function LandingPage() {
    // Redirect the user immediately to the default home screen topic
    redirect('/experiments/electrical-comparator/Aim');
    // Note: If you need a landing page with content before the redirect, you would put it here.
    // For now, an immediate redirect is the safest way to ensure the correct structure loads.
}