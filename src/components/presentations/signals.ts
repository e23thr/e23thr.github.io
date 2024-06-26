import { createSignal } from "solid-js";

export const [windowHeight, setWindowHeight] = createSignal<number>(0);
export const [windowWidth, setWindowWidth] = createSignal<number>(0);
export const [scrollY, setScrollY] = createSignal<number>(0);
// export const [clientWidth, setClientWidth] = createSignal<number>(0);
