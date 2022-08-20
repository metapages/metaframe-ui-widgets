import React from "react";
import { IconButton, Spinner } from "@chakra-ui/react";
import { SpinnerIcon, WarningIcon } from "@chakra-ui/icons";

export const ButtonReactive: React.FC<{
  onClick: (_?:any) => any;
  icon:any; //this is a
  color?: string;//SemanticCOLORS;
  result?: { loading?: boolean; error?: any };
  props?: any;
  text?: string;
}> = ({ icon, onClick, color, result, props, text }) => {
  // not actually showing, but will print to console
  // don't yet have a good error correction system
  // showError(result);


//   let color: SemanticCOLORS | undefined = defaultColor;
  if (result?.loading) {
    icon = SpinnerIcon;
  } else if (result?.error) {
    icon = WarningIcon;
    color = "red";
  }

  if (result?.loading) {
    return <Spinner/>;
  }

  return (
    <IconButton
      aria-label={text || ""}
      // loading={result?.loading}
      colorScheme={props?.negative ? 'red' : 'blue'}
      // negative={props?.negative}
      icon={icon}
      onClick={onClick}
      color={color}
    >
      {text}

    </IconButton>
  );
};
