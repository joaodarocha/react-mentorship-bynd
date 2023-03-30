import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="title">Welcome!</h1>
      <h2> Go to <Link href="/todoapp">To-do App</Link></h2>
    </div>
  );
}
