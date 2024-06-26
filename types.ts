import type { Accessor, JSX } from "solid-js";

export interface SceneProps extends JSX.HTMLAttributes<HTMLDivElement> {
  // windowWidth: Accessor<number>;
  // windowHeight: Accessor<number>;
  // scrollY: Accessor<number>;
  style?: JSX.CSSProperties;
}
