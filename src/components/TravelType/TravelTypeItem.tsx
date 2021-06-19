import { Image, Text, VStack } from "@chakra-ui/react";

interface ItemTravelProps {
  label: string;
  image: string;
}

export function TravelItem({ label, image }: ItemTravelProps) {
  return (
    <VStack  width="1160">
      <Image src={`/images/${image}.svg`} width="85px" height="85px"/>
      <Text fontSize="1.5rem" fontWeight="semibold">
        {label}
      </Text>
    </VStack>
  );
}