import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = (number) => {
  const { counter } = useCounter(-1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
