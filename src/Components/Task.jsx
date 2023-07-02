import { useState, useEffect } from "react";
import {
  ListItem,
  Checkbox,
  Input,
  Flex,
  Text,
  Button,
  Box,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import swal from "sweetalert";

export default function Task(props) {
  const fontSize = useBreakpointValue({ base: "sm", md: "md" });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const { colorMode } = useColorMode();
  const {
    id,
    title,
    description,
    completed,
    onTaskCompletion,
    onTaskEdit,
    onTaskDelete,
  } = props;
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  // Establece los valores iniciales de edición cuando cambian las props
  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
  }, [title, description]);

  //Maneja el clic en el checkbox para marcar o desmarcar una tarea como completada
  const handleClickCheck = () => {
    setIsCompleted(!isCompleted);
    onTaskCompletion(id, !isCompleted);
  };

  // Maneja el clic en el botón "Edit" para cambiar al modo de edición de la tarea
  const handleEdit = () => {
    setIsEditing(true);
  };

   // Maneja el clic en el botón "Save" para guardar los cambios realizados en la tarea
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

  // Maneja el clic en el botón "Delete" para eliminar la tarea
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
      <Box
        bg={colorMode === "light" ? "gray.100" : "gray.700"}
        p="4"
        rounded="md"
        mb="4"
        mt="10"
      >
        <Flex alignItems="center">
          <Checkbox
            isChecked={isCompleted}
            onChange={handleClickCheck}
            size="lg"
            style={{ borderColor: "rgba(0, 0, 0, 0.3)" }}
          />
          <Text
            color={colorMode === "light" ? "gray.700" : "whitesmoke"}
            ml="10px"
            fontWeight="bold"
            textDecoration={isCompleted ? "line-through" : "none"}
            fontSize={fontSize}
          >
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
        <Text
          mt="2"
          textAlign="left"
          fontSize={fontSize}
          color={colorMode === "light" ? "gray.700" : "whitesmoke"}
        >
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
            <Button colorScheme="teal" onClick={handleSave} size={buttonSize}>
              <CheckIcon />
            </Button>
          ) : (
            <Button colorScheme="teal" onClick={handleEdit} size={buttonSize}>
              <EditIcon />
            </Button>
          )}
          <Button colorScheme="red" onClick={handleDelete} size={buttonSize}>
            <DeleteIcon />
          </Button>
        </Flex>
      </Box>
    </ListItem>
  );
}
