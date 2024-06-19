"use client"
import React, { useState, useEffect } from 'react';
import Test1 from './N5/Test1';

const N5Test1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jlpt.mazii.net/api/jlpt/66627a220a43fb007c54dfe4`);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Test1 data={data} />
  );
};

export default N5Test1;
