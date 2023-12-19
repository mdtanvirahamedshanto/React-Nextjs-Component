/**
 * React Or Nextjs Install All Pakagese ,
 *  npm install or yarn add  @react-three/drei @react-three/fiber
 * copy all of file [ .jsx / .tsx ]
 * then use this component main layout / main file top...
 */

"use client";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackgroud = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanva = () => (
  <div className="w-full h-auto fixed inset-0 z-[20] ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackgroud />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanva;
