import { Box, Button, FormControl, FormErrorMessage, Input, Text, UnorderedList } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/react";
import Task from "./Task";
import { useForm } from "react-hook-form";
import { useTaskList } from "./useTaskList";

const TaskList = (props) => {
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

  const getPendingTasksCount = () => {
    return listTask.filter((task) => !task.stat).length;
  };

  const handleTaskInputChange = () => {
    trigger("task");
  };

  return (
    <Box maxW="40rem" mx="auto" p="1rem"> {/* Ajusta el valor de maxW según el ancho deseado */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.task} mb={2}>
          <Input
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
          <FormErrorMessage>{errors.task && errors.task.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.description} mb={2}>
          <Textarea
            placeholder="Add task's description (optional)"
            {...register("description")}
            resize="vertical"
            h="6rem"
          />
        </FormControl>

        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Button type="submit" colorScheme="teal" size="sm" width="48%">
            <AddIcon />
          </Button>
          <Button colorScheme="red" size="sm" variant="outline" width="48%" onClick={handleClear}>
            Clear all
          </Button>
        </Box>
      </form>

      <Text fontSize="1.3rem" color="gray.600" fontWeight="semibold" letterSpacing="wide">
        You have {getPendingTasksCount()} pending task{getPendingTasksCount() !== 1 ? "s" : ""}
      </Text>

      <Text fontSize="0.9rem" color="gray.500" mt={2}>
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
