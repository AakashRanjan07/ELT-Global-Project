'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Timer({ initialTime }: { initialTime: number }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      router.push('/results'); // Redirect to results page when time is up
    }

    return () => clearInterval(timer); 
  }, [timeLeft, router]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="text-sm font-medium bg-gray-100 text-gray-800 px-4 py-2 rounded dark:bg-gray-800 dark:text-gray-100">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
}
