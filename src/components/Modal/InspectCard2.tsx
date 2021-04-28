import React, { Suspense, FC, useEffect, useRef } from "react";
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

interface InspectorProps {
  nft: PokemoonNft;
}

const StyledInfo = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 300px;
`;

const CardModel: FC = () => {
  const gltf = useGLTF("/models/016babymeownautML.glb");

  const { ref, mixer, names, actions } = useAnimations(gltf.animations);

  useEffect(() => {
    if (Object.keys(actions).length > 0 && names.length > 0) {
      actions[names[0]].play();
    }
  }, [ref, mixer, names, actions]);

  return (
    <>
      <primitive object={gltf.scene} ref={ref} />
    </>
  );
};

export const InspectCard: React.FC<InspectorProps> = ({ nft }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const bi = `url("/images/types/${nft?.card?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

  const { tier } = useDetectGPU() ?? { tier: 0 };

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
          height: !matches ? "50%" : "75vh",
          backgroundColor: "black",
          border: "8px outset #da52de",
          padding: 0,
        }}
        md={6}
        lg={4}
        sm={6}
        xs={12}
      >
        {tier > 0 ? (
          <Canvas style={{ flex: 1 }}>
            <PerspectiveCamera position={[0, 1.3, 4]} makeDefault />
            <OrbitControls target={new THREE.Vector3(0, 1.3, 0)} />
            <directionalLight
              intensity={0.7}
              position={new THREE.Vector3(-1, 0.5, 3)}
            />
            <directionalLight
              intensity={0.6}
              position={new THREE.Vector3(0, 0, -1)}
            />
            <directionalLight
              intensity={0.4}
              position={new THREE.Vector3(1, 0.5, 3)}
            />
            <Stars />
            <Suspense fallback={null}>
              <CardModel />
            </Suspense>
          </Canvas>
        ) : (
          <img
            width={250}
            src={`/images/cards/${nft?.imageUrl}`}
            alt={nft?.imageUrl}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <NftInfo nft={nft} />
      </Grid>
    </Grid>
  );
};

export default InspectCard;
