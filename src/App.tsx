import { h } from "preact";
import { useCounter } from "@hooks/useCounter";
import { Button } from "@material-ui/core";
import { PrimaryButton } from "@fluentui/react";
const Comp1 = () => {
  const [count, increment] = useCounter(0);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increment as any}>Increment</button>
    </div>
  );
};

export function App(props) {
  return (
    <div>
      <Button>only caps allowed sorry</Button>
      <PrimaryButton>FluentUI Button</PrimaryButton>
      <Comp1 />
    </div>
  );
}
