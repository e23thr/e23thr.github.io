import {
  createEffect,
  createSignal,
  on,
  onMount,
  type Component,
} from "solid-js";
import type { SceneProps } from "../../../types";
import { windowHeight, windowWidth, scrollY } from "./signals";

const WelcomeScene: Component<SceneProps> = (props) => {
  let wrapperEl: HTMLDivElement;
  let textEl: HTMLDivElement;
  let myNameEl: HTMLDivElement;
  const [step, setStep] = createSignal<number>(0);

  const cssAnimateClass = ["transform", "transition-transform", "duration-700"];

  createEffect(
    on([step, windowHeight, windowWidth, scrollY], ([s, h, w, sy]) => {
      // const s = step();
      // const h = windowHeight();
      // const w = windowWidth();
      // const sy = scrollY();
      // setup
      textEl.style.fontSize = `${Math.floor(h / 20)}px`;
      myNameEl.style.fontSize = `${Math.floor(h / 10)}px`;

      console.log("effect step", s);
      if (s === 0) {
        return;
      }

      if (s === 1) {
        textEl.classList.add(...cssAnimateClass);
        textEl.style.transform = `translateX(calc(${w}px - ${textEl.offsetWidth}px))`;
        myNameEl.classList.add(...cssAnimateClass);
        myNameEl.style.transform = `translateX(0px)`;
        setTimeout(() => {
          textEl.classList.remove(...cssAnimateClass);
          myNameEl.classList.remove(...cssAnimateClass);
          setStep(step() + 1);
        }, 1100);
      }
      if (s > 1) {
        textEl.classList.remove(...cssAnimateClass);
        myNameEl.classList.remove(...cssAnimateClass);
        // more animation on scroll
        // const wrapperHeight = wrapperEl.offsetHeight;
        const wrapperWidth = wrapperEl.offsetWidth;
        const ratio = (sy / wrapperWidth) * 2;
        console.log("ratio", ratio, sy);
        textEl.style.transform = `translateX(calc(${w}px - ${
          textEl.offsetWidth
        }px - ${ratio * sy}px ))`;
        myNameEl.style.transform = `translateX(${sy * ratio}px)`;

        textEl.style.opacity = `${1 - ratio}`;
        myNameEl.style.opacity = `${1 - ratio}`;
      }
    })
  );

  createEffect(
    on(windowWidth, () => {
      setStep(1);
    })
  );

  onMount(() => {
    setTimeout(() => {
      setStep(1);
    }, 300);
  });

  return (
    <div
      class="flex items-end overflow-x-hidden min-h-lvh"
      style={{
        ...props.style,
        "min-height": "100lvh",
      }}
    >
      <div ref={wrapperEl!} class="wrapper bg-gray-100 w-full py-3">
        <div
          ref={textEl!}
          class={`-translate-x-full w-fit text-gray-500 px-10`}
        >
          My name is
        </div>
        <div
          ref={myNameEl!}
          class={`w-fit translate-x-[1000px] text-gray-500 px-10`}
        >
          Praphan<span class="hidden md:inline-block pl-3"> Oranphanlert</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScene;
