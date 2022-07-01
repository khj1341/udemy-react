import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = ({
  text,
  onRemoveTodo,
}) => {
  return (
    <section>
      <li className={classes.item} onClick={onRemoveTodo}>
        {text}
      </li>
    </section>
  );
};

export default TodoItem;
