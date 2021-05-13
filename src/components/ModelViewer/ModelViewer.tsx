import { PokemoonNft } from "config/constants/nfts";
import { FC, useState, useMemo, useEffect, Suspense } from "react";
import { CanvasTextureProps } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  useAnimations,
  useDetectGPU,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { useThree } from "@react-three/fiber";

type DivProps = JSX.IntrinsicElements["div"];

export interface ModelViewerProps extends DivProps {
  nft: PokemoonNft;
}

interface CardModelProps {
  glbUrl: string;
}

const CardModel: FC<CardModelProps> = ({ glbUrl }) => {
  const gltf = useGLTF(glbUrl);

  const { ref, mixer, names, actions } = useAnimations(gltf.animations);

  const scene = gltf.scene.clone(true);

  useEffect(() => {
    for (const name of names) {
      actions[name].play();
    }
  }, [ref, mixer, names, actions, glbUrl]);

  return <>{gltf && <primitive object={scene} ref={ref} dispose={null} />}</>;
};

const ModelViewer: FC<ModelViewerProps> = ({ nft, ...props }) => {
  const { glbUrl, imageUrl } = nft;
  const { style } = props;
  const { tier } = useDetectGPU() ?? { tier: undefined };
  const [gpuPending, setGpuPending] = useState(true);
  const renderGPU = useMemo(() => {
    if (gpuPending) return true;
    else {
      return !!tier && tier > 0;
    }
  }, [gpuPending, tier]);

  useEffect(() => {
    if (!!tier) {
      setGpuPending(false);
    }
  }, [tier, setGpuPending]);
  return (
    <div
      style={{
        backgroundColor: renderGPU ? "black" : "transparent",
        border: renderGPU ? "8px outset #da52de" : "none",
      }}
    >
      {renderGPU && !!glbUrl ? (
        <Canvas {...props} style={{ ...style, backgroundColor: "black" }}>
          <PerspectiveCamera position={[0, 1.3, 4]} makeDefault />
          <OrbitControls target={new THREE.Vector3(0, 1.3, 0)} />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(-1, -1, 3)}
          />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(1, 1, 3)}
          />
          <directionalLight
            intensity={0.3}
            position={new THREE.Vector3(0, 0, -1)}
          />
          <Stars />
          <Suspense fallback={null}>
            {/* @ts-ignore */}
            <CardModel glbUrl={glbUrl} />
          </Suspense>

          <EffectComposer>
            <BrightnessContrast brightness={0.2} contrast={0.4} />
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={1}
              height={80}
              intensity={0.3}
            />
          </EffectComposer>
        </Canvas>
      ) : (
        !gpuPending &&
        !renderGPU && (
          <img width={250} src={`/images/cards/${imageUrl}`} alt={imageUrl} />
        )
      )}
    </div>
  );
};

export default ModelViewer;
