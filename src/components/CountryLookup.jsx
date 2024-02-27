'use client';

import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('India');


  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
        const data = await response.json();
        const country = data.country;
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };
  
    getCountry();
  }, []);

  
  return <div>{country}</div>;
}