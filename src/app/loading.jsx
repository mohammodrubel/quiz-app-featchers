import React from 'react';
import { PuffLoader } from 'react-spinners';

function Loading() {
  return (
    <div style={{ width: '100%', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PuffLoader color="#36d7b7" />
    </div>
  );
}

export default Loading;