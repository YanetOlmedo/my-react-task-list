  //Pasamos las tareas como propiedad
export default function Task(props) {
    const { title } = props;

    //Esta función va a responder cada vez que hagan click en el check
    const handleClickCheck = () => {
      console.log(`Check: ${title}`);
    };


    return (
      <div>
        <li>
          <input type="checkbox" onClick={handleClickCheck} />
          <span>{ title }</span>
        </li>
      </div>
    );
  }