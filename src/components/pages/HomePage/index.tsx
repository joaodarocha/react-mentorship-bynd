import Link from 'next/link';
import React from 'react';
import { Button } from '@bynd-ui-library/react';
import { CircularProgress } from '@mui/material';

export const HomePage = () => {

  const handleToggle = () => {
    console.log('Clicked button');
  }

  return (
    <div>
      <h1 className="title">Welcome!</h1>
      <h2> Go to <Link href="/todoapp">To-do App</Link></h2>
      <div>
        <Button onClick={handleToggle}>BYND button</Button>
        <CircularProgress color="inherit" className="hidden"/>
      </div>
    </div>
  );
}
