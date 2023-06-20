import Header from "../Components/Header";

function AboutUs() {
  return (
    <div>
      <Header />
      <h2>About us</h2>
      <p>
        Welcome to Todo App is a task management application created with React.
      </p>
      <p>
        Our application helps you to efficiently organize your tasks and be more
        productive.
      </p>
      <h3>Key Features:</h3>
      <ul>
        <li>
          Create new tasks and add descriptions to them: This allows you to keep
          track of your tasks and their details.
        </li>
        <li>
          Edit tasks: This allows you to make changes to your tasks as needed.
        </li>
        <li>
          Mark tasks as completed: This allows you to track your progress and
          see what tasks you have still to complete.
        </li>
        <li>
          Delete tasks individually: This allows you to remove tasks from your
          list as you finish them.
        </li>
        <li>
          Delete all tasks with a single click: This allows you to quickly clear
          your list of tasks.
        </li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>React: JavaScript library for building user interfaces.</li>
        <li>React Router: Library for routing in React applications.</li>
        <li>React Hook Form: Library for form handling in React.</li>
        <li>UUID: Library for generating unique identifiers.</li>
        <li>Sweetalert: Library for displaying alerts and modal dialogs.</li>
        <li>HTML: Markup language for structuring the application&apos;s content.</li>
        <li>CSS: Styling language for designing the application&apos;s appearance.</li>
      </ul>
    </div>
  );
}

export default AboutUs;