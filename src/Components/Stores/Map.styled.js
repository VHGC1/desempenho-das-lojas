import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 384.8px;
  margin-bottom: 5rem;

  @media (max-width: 50rem) {
    & {
      width: 100%;
    }
  }
`;
