import React, {
  Suspense,
  FC,
  useEffect,
  useRef,
  useMemo,
  useState,
} from "react";
import { useMediaQuery } from "@material-ui/core";
import { PokemoonNft } from "constants/nfts";
import NftInfo from "../NftInfo";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  useGLTF,
  Loader,
  PerspectiveCamera,
  OrbitControls,
  Stage,
  useAnimations,
  useDetectGPU,
  Stars,
} from "@react-three/drei";
import { InspectorDialogProps } from "components/Modal/InspectorModal";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Glitch,
  BrightnessContrast,
  HueSaturation,
} from "@react-three/postprocessing";

interface CardModelProps {
  glbUrl: string;
}

const StyledInfo = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 300px;
`;

const CardModel: FC<CardModelProps> = ({ glbUrl }) => {
  const gltf = useGLTF(glbUrl);

  const { ref, mixer, names, actions } = useAnimations(gltf.animations);

  useEffect(() => {
    for (const name of names) {
      actions[name].play();
    }
  }, [ref, mixer, names, actions]);

  return <>{gltf && <primitive object={gltf.scene} ref={ref} />}</>;
};

export const InspectCard: React.FC<InspectorDialogProps> = ({
  nft,
  handleClose,
}) => {
  const { glbUrl } = nft;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const bi = `url("/images/types/${nft?.card?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

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
    <Grid
      justify="center"
      spacing={6}
      container
      style={{
        backgroundImage: bi,
        backgroundSize: "cover",
        padding: 40,
        alignItems: "center",
        flex: 1,
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        style={{
          flex: 1,
          height: renderGPU ? (!matches ? "50%" : "75vh") : "auto",
          backgroundColor: renderGPU ? "black" : "transparent",
          border: renderGPU ? "8px outset #da52de" : "none",
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
        md={6}
        lg={4}
        sm={6}
        xs={12}
      >
        {renderGPU && !!glbUrl ? (
          <Canvas style={{ flex: 1 }}>
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
              <CardModel glbUrl={nft.glbUrl} />
            </Suspense>

            <EffectComposer>
              <BrightnessContrast brightness={0.2} contrast={0.4} />
              <Bloom
                luminanceThreshold={0.2}
                luminanceSmoothing={0.9}
                height={300}
                intensity={0.4}
              />
            </EffectComposer>
          </Canvas>
        ) : (
          !gpuPending &&
          !renderGPU && (
            <img
              width={250}
              src={`/images/cards/${nft?.imageUrl}`}
              alt={nft?.imageUrl}
            />
          )
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <NftInfo handleClose={handleClose} nft={nft} />
      </Grid>
    </Grid>
  );
};

export default InspectCard;
