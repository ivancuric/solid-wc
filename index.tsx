import { customElement } from "solid-element";
import { createSignal, createComputed, onCleanup, Component } from "solid-js";

const Counter: Component<{ value: number }> = (props) => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));
  createComputed(() => setCount(props.value));

  return <div>{count()}</div>;
};

customElement("solid-counter", { value: 0 }, Counter);
