import { FunctionalComponent } from "preact";
import { Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import { ButtonHelp, OptionsMenuButton, Option } from "../lib";

const options: Option[] = [
  {
    name: "someoption",
    displayName: "A boolean option",
    default: true,
    type: "boolean",
  },
];

export const Home: FunctionalComponent = () => (
  <SimpleGrid columns={1} spacing={10}>
    <Flex>
      <Heading size="md">
        Example showing widgets exported by this module
      </Heading>
      <Spacer />
      <ButtonHelp />
      <OptionsMenuButton options={options} />
    </Flex>
  </SimpleGrid>
);
