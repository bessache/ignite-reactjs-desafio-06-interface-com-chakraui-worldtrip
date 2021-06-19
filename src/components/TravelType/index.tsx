import { Flex, HStack, Stack } from "@chakra-ui/react";
import { TravelItem } from "./TravelTypeItem";

export function TravelType() {
  return (
    <Flex as="section"  padding="4" width="1160px" maxWidth="1160px"  height="145px" justifyContent="space-between" alignItems="center" marginY="40px">
        
        <TravelItem label="vida noturna" image="cocktail" />
        <TravelItem label="praia" image="surf" />
        <TravelItem label="moderno" image="building" />
        <TravelItem label="clássico" image="museum" />
        <TravelItem label="e mais..." image="earth" />
    </Flex>
  );
}