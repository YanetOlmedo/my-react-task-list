import { useState, useEffect } from "react";
import { ListItem, Checkbox, Input, Flex, Text, Button, Box } from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import swal from "sweetalert";

export default function Task(props) {
  const { id, title, description, completed, onTaskCompletion, onTaskEdit, onTaskDelete } = props;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
  }, [title, description]);

  const handleClickCheck = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(id, !isCompleted);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    swal({
      title: "Save changes?",
      text: "Do you want to save the changes?",
      icon: "warning",
      buttons: ["Cancel", "Save"],
      dangerMode: true,
    }).then((willSave) => {
      if (willSave) {
        onTaskEdit(id, editedTitle, editedDescription);
        setIsEditing(false);
        swal("Changes saved!", { icon: "success" });
      } else {
        swal("Changes canceled!");
        setIsEditing(false);
        setEditedTitle(title);
        setEditedDescription(description);
      }
    });
  };

  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete this task?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        onTaskDelete(id);
        swal("Your task has been deleted!", { icon: "success" });
      } else {
        swal("Your task is safe!");
      }
    });
  };

  return (
    <ListItem>
      <Box bg="gray.100" p="4" rounded="md" mb="4">
        <Flex alignItems="center">
          <Checkbox
            isChecked={isCompleted}
            onChange={handleClickCheck}
            size="lg"
            style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}
          />
          <Text ml="10px" fontWeight="bold" textDecoration={isCompleted ? "line-through" : "none"}>
            {isEditing ? (
              <Input
                type="text"
                value={editedTitle}
                onChange={(event) => setEditedTitle(event.target.value)}
              />
            ) : (
              title
            )}
          </Text>
        </Flex>
        <Text mt="2" textAlign="left">
          {isEditing ? (
            <Input
              type="text"
              value={editedDescription}
              onChange={(event) => setEditedDescription(event.target.value)}
            />
          ) : (
            description
          )}
        </Text>
        <Flex mt="2" justify="flex-end" gap="10px">
          {isEditing ? (
            <Button colorScheme="teal" onClick={handleSave}>
              <CheckIcon />
            </Button>
          ) : (
            <Button colorScheme="teal" onClick={handleEdit}>
              <EditIcon />
            </Button>
          )}
          <Button colorScheme="red" onClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </Flex>
      </Box>
    </ListItem>
  );
}
