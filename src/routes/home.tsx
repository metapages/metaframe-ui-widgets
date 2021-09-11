import { FunctionalComponent } from "preact";
import {
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
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
        This module exports these widgets (to the right)
      </Heading>
      <UnorderedList>
        <ListItem>Help button showing the (rendered) local <code>./Readme.md</code> file</ListItem>
        <ListItem>
          Options (configurable) stored encoded in the URL hash params
        </ListItem>
      </UnorderedList>
      <Spacer />
      <ButtonHelp />
      <OptionsMenuButton options={options} />
    </Flex>
  </SimpleGrid>
);
