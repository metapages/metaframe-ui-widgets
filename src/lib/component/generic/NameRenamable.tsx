import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Grid, Input, GridItem, Spinner } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";

export const NameRenamable: React.FC<{
  name: string;
  update: (newValue: string) => void;
  link?: string;
  result?: { loading?: boolean; error?: any };
  validCheck?: (v: string) => boolean;
}> = ({ name, update, result, validCheck, link }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(name);

  const updateName = useCallback(async () => {
    if (name === value) {
      setIsEditing(false);
      return;
    }
    if (validCheck && !validCheck(value)) {
      setIsEditing(false);
      return;
    }
    update(value);
    setIsEditing(false);
  }, [name, value, setIsEditing, update, validCheck]);

  const onClickCancel = useCallback(() => {
    setIsEditing(false);
    setValue(name);
  }, [name, setIsEditing, setValue]);

  const onClickEdit = useCallback(() => {
    setIsEditing(true);
  }, [setIsEditing]);

  const onKeyDown = useCallback(
    async (e: React.KeyboardEvent) => {
      if (e.keyCode === 13) {
        // enter
        updateName();
      } else if (e.keyCode === 27) {
        onClickCancel();
      }
    },
    [onClickCancel, updateName]
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={1}>
      <GridItem w="100%" h="10" textAlign="left" bg="blue.500">
        {isEditing ? (
          <Input
            autoFocus
            onBlur={onClickCancel}
            // loading={result?.loading}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        ) : link ? (
          <Link to={{ pathname: link }}>{name}</Link>
        ) : (
          name
        )}
      </GridItem>
      <GridItem w="100%" h="10" textAlign="right" bg="blue.500">
        {isEditing ? (
          result?.loading ? (
            <Spinner />
          ) : (
            <p>
              <IconButton
                aria-label="update name"
                disabled={!value || value.length === 0}
                onMouseDown={updateName}
                icon={<CheckIcon />}
              />

              <IconButton
                aria-label="cancel"
                onClick={onClickCancel}
                icon={<CloseIcon />}
              />
            </p>
          )
        ) : (
          <IconButton
            aria-label="edit"
            onClick={onClickEdit}
            icon={<EditIcon />}
          />
        )}
      </GridItem>
    </Grid>
  );
};
