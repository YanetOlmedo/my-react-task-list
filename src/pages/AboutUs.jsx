import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ColoredCheckCircleIcon = ({ mr = "2", mb = "1" }) => (
  <CheckCircleIcon color="teal.500" mr={mr} mb={mb} />
);

function AboutUs() {
  const keyFeatures = [
    "Create new tasks and add descriptions to them: This allows you to keep track of your tasks and their details.",
    "Edit tasks: This allows you to make changes to your tasks as needed.",
    "Mark tasks as completed: This allows you to track your progress and see what tasks you have still to complete.",
    "Delete tasks individually: This allows you to remove tasks from your list as you finish them.",
    "Delete all tasks with a single click: This allows you to quickly clear your list of tasks.",
  ];

  const technologiesUsed = [
    { name: "React", description: "JavaScript library for building user interfaces." },
    { name: "React Router", description: "Library for routing in React applications." },
    { name: "React Hook Form", description: "Library for form handling in React." },
    { name: "Chakra UI", description: "Component library for building accessible and customizable UI components." },
    { name: "UUID", description: "Library for generating unique identifiers." },
    { name: "Sweetalert", description: "Library for displaying alerts and modal dialogs." },
    { name: "HTML", description: "Markup language for structuring the application's content." },
    { name: "CSS", description: "Styling language for designing the application's appearance." },
  ];

  return (
    <>
      <Heading as="h2" size="lg" fontWeight="bold" mt="2%" mb="2" p="1%" color="teal.500">
        About us
      </Heading>
      <Text mx="4" color="gray.600">
        Welcome to Todo App is a task management application created with React.
      </Text>
      <Text mx="4" mb="2" color="gray.600">
        Our application helps you to efficiently organize your tasks and be more productive.
      </Text>
      <Heading as="h3" size="md" fontWeight="bold" mt="4" mb="2" textAlign="left" color="teal.500">
        Key Features:
      </Heading>
      <UnorderedList mx="4" textAlign="left" listStyleType="none">
        {keyFeatures.map((feature, index) => (
          <ListItem key={index}>
            <ColoredCheckCircleIcon />
            <Text as="span" color="gray.600" ml="2">
              {feature}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
      <Heading as="h3" size="md" fontWeight="bold" mt="4" mb="2" textAlign="left" color="teal.500">
        Technologies Used:
      </Heading>
      <UnorderedList mx="4" textAlign="left" style={{ listStyleType: "none" }}>
        {technologiesUsed.map((technology, index) => (
          <ListItem key={index}>
            <ColoredCheckCircleIcon />
            <Text as="span" color="gray.600" fontWeight="bold" ml="2">
              {technology.name}:
            </Text>{" "}
            <Text as="span" color="gray.600">
              {technology.description}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
}

export default AboutUs;
