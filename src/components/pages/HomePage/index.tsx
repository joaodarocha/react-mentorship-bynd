import Link from 'next/link';
import React from 'react';

export const HomePage = () => {
  return (
    <div>
      <h1 className="title">Welcome!</h1>
      <h2> Go to <Link href="/todoapp">To-do App</Link></h2>
    </div>
  );
}
