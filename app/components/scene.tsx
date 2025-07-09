'use client';

import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Model } from './model';
import { Environment } from '@react-three/drei';
import dynamic from 'next/dynamic';

function SceneLoaded() {
  return (
    <Canvas camera={{ position: [0, 0, 45], fov: 10 }}>
      <Environment background={false}>
        <color attach="background" args={['#ffffff']} />
      </Environment>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Model />
    </Canvas>
  );
}

const Scene = dynamic(() => Promise.resolve(SceneLoaded), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default Scene;
