import { FC, useEffect, useRef } from 'react';

import { useCanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import WaveObj from '../utils/wave';

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  const frequencyRef = useRef(0.013);
  const animationIdRef = useRef<number>();
  const wavesRef = useRef({
    frontWave: new WaveObj([0.0211, 0.028, 0.015], 'rgb(186, 104, 162, 0.35)'),
    backWave: new WaveObj([0.0122, 0.018, 0.005], 'rgb(218, 160, 201, 0.3)'),
  });

  useEffect(() => {
    if (!context) return;
    function render() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      Object.entries(wavesRef.current).forEach(([, wave]) => {
        wave.draw(context, width, height, frequencyRef.current);
      });
      frequencyRef.current += 0.013;
      animationIdRef.current = requestAnimationFrame(render);
    }

    render();

    // eslint-disable-next-line consistent-return
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [context, width, height]);

  return null;
};

export default Wave;
