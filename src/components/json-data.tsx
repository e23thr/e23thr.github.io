import {
  For,
  createSignal,
  onCleanup,
  onMount,
  type Component,
  type JSX,
} from "solid-js";

const formatJson = (obj: any) => {
  const jsonString = JSON.stringify(obj, null, 2);
  const lines = jsonString.split(/\r?\n/);

  return (
    <div class="flex flex-col">
      <For each={lines}>
        {(line) => {
          const spaceCount = line.match(/^\s*/g)?.[0]?.length ?? 0;
          return <div class={`pl-js-${spaceCount / 2}`}>{line}</div>;
        }}
      </For>
    </div>
  );
};

const JsonData: Component<JSX.HTMLAttributes<HTMLDivElement> & { obj: any }> = (
  props
) => {
  const formattedJson = formatJson(props.obj);
  return <div class="text-3xl">{formattedJson}</div>;
};

export default JsonData;
