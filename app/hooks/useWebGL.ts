'use client'
import { useEffect, useState } from 'react'

function useWebGL(): boolean {
 const [hasWebGL, setHasWebGL] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setHasWebGL(!!gl);
      } catch {
        setHasWebGL(false);
      }
    }
  }, []);

  return hasWebGL;
}

export default useWebGL