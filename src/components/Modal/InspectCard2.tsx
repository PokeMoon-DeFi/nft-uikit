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
} from "@react-three/drei";

interface InspectorProps {
  nft?: PokemoonNft;
}

const StyledInfo = styled.div`
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  min-width: 300px;
`;

const CardModel: FC = () => {
  const gltf = useGLTF("/models/016babymeownautML.glb");

  const ref = useRef<THREE.Group>(null);
  const animations = useAnimations(gltf.animations);
  useEffect(() => {
    console.log(animations);
  }, [animations]);
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
};

export const InspectCard: React.FC<InspectorProps> = ({ nft }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const bi = `url("/images/types/${nft?.card?.type}${
    matches ? "wide 1" : "tall 1"
  }.png")`;

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
        overflow: "hidden",
      }}
    >
      <Grid item>
        {/* <img
          width={250}
          src={`/images/cards/${nft?.imageUrl}`}
          alt={nft?.imageUrl}
        /> */}
        <Canvas style={{ height: 380 }}>
          <PerspectiveCamera position={[0, 1.2, 4]} makeDefault />
          <OrbitControls target={new THREE.Vector3(0, 1.2, 0)} />
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
          <Suspense fallback={null}>
            <CardModel />
          </Suspense>
        </Canvas>
      </Grid>
      <Grid item>
        <StyledInfo>{nft && <NftInfo nft={nft} />}</StyledInfo>
      </Grid>
    </Grid>
  );
};

export default InspectCard;
