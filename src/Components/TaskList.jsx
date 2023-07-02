import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  UnorderedList,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import Task from "./Task";
import { useForm } from "react-hook-form";
import { useTaskList } from "./useTaskList";

const TaskList = (props) => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "lg",
    md: "xl",
    lg: "2xl",
    xl: "xl",
  });
  const { list } = props;
  const {
    listTask,
    addTask,
    handleTaskCompletion,
    handleTaskEdit,
    handleTaskDelete,
    handleClear,
  } = useTaskList(list);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    addTask(data.task, data.description);
    reset();
  };

   //Controla la cantidad de tareas pendientes.
  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  // Maneja el cambio en el campo de entrada de la tarea
  const handleTaskInputChange = () => {
    trigger("task");
  };

  return (
    <Box maxW="40rem" mx="auto" p="1rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.task} mb={2}>
          <Input
            bg={colorMode === "light" ? "gray.100" : "gray.700"}
            h="3rem"
            type="text"
            placeholder="Add your new todo"
            {...register("task", {
              required: "Task name is required",
              minLength: {
                value: 3,
                message: "Task name must have at least 3 characters",
              },
              validate: {
                isEmpty: (value) =>
                  value.trim() !== "" || "Task name is required",
              },
            })}
            onInput={handleTaskInputChange}
          />
          <FormErrorMessage>
            {errors.task && errors.task.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description} mb={2}>
          <Textarea
            bg={colorMode === "light" ? "gray.100" : "gray.700"}
            placeholder="Add task's description (optional)"
            {...register("description")}
            resize="vertical"
            h="7rem"
          />
        </FormControl>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Button type="submit" colorScheme="teal" size="sm" width="48%">
            Add task
          </Button>
          <Button
            colorScheme="red"
            size="sm"
            variant="outline"
            width="48%"
            onClick={handleClear}
          >
            Clear all
          </Button>
        </Box>
      </form>

      <Text
        fontSize={textSize}
        color={colorMode === "light" ? "gray.700" : "gray.100"}
        fontWeight="semibold"
        letterSpacing="wide"
      >
        You have {getPendingTasksCount()} pending task
        {getPendingTasksCount() !== 1 ? "s" : ""}
      </Text>

      <Text
        fontSize={useBreakpointValue({
          base: "md",
          sm: "sm",
          md: "md",
          lg: "md",
          xl: "md",
        })}
        color={colorMode === "light" ? "gray.500" : "gray.200"}
        mt={2}
      >
        Stay productive and keep up the good work! 😊
      </Text>

      <UnorderedList mt={4} listStyleType="none">
        {listTask.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.titleTask}
            description={task.description}
            completed={task.stat}
            onTaskCompletion={handleTaskCompletion}
            onTaskEdit={handleTaskEdit}
            onTaskDelete={handleTaskDelete}
          />
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TaskList;
