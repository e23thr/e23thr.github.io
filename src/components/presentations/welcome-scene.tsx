import {
  createEffect,
  createSignal,
  on,
  onMount,
  type Component,
} from "solid-js";
import type { SceneProps } from "../../../types";
import { windowHeight, windowWidth, scrollY } from "./signals";
import "../../base.css";
const WelcomeScene: Component<SceneProps> = (props) => {
  let sceneEl: HTMLDivElement;
  let darkBgEl: HTMLDivElement;
  let wrapperEl: HTMLDivElement;
  let textEl: HTMLDivElement;
  let myNameEl: HTMLDivElement;
  const [step, setStep] = createSignal<number>(0);

  const cssAnimateClass = ["transform", "transition-transform", "duration-700"];

  createEffect(
    on([step, windowHeight, windowWidth, scrollY], ([s, h, w, sy]) => {
      // setup
      textEl.style.fontSize = `${Math.floor(w / 30)}px`;
      myNameEl.style.fontSize = `${Math.floor(w / 15)}px`;

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
        // wrapperEl.offsetHeight
        darkBgEl.style.opacity = `${
          sy > 0
            ? sy < darkBgEl.offsetHeight
              ? sy / darkBgEl.offsetHeight
              : 1
            : 0
        }`;
        console.log("background", darkBgEl.offsetHeight);
        textEl.classList.remove(...cssAnimateClass);
        myNameEl.classList.remove(...cssAnimateClass);
        // more animation on scroll
        // const wrapperHeight = wrapperEl.offsetHeight;
        const wrapperWidth = wrapperEl.offsetWidth;
        const ratio = sy / wrapperWidth / 0.5;
        console.log("ratio", ratio, sy);
        textEl.style.transform = `translateX(calc(${w}px - ${
          textEl.offsetWidth
        }px - ${ratio * sy}px ))`;
        myNameEl.style.transform = `translateX(${sy * ratio}px)`;

        // textEl.style.opacity = `${1 - ratio}`;
        // myNameEl.style.opacity = `${1 - ratio}`;
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
      ref={sceneEl!}
      class="flex items-end overflow-x-hidden min-h-lvh welcome-scene relative"
      style={{
        ...props.style,
        "min-height": "100lvh",
      }}
    >
      <div
        ref={darkBgEl!}
        class="h-full w-full absolute left-0 top-0 bg-black opacity-0"
      ></div>
      <div ref={wrapperEl!} class="wrapper  w-full py-10">
        <div
          ref={textEl!}
          class={`-translate-x-full w-fit text-gray-200 px-10`}
        >
          Interactive portfolio
        </div>
        <div
          ref={myNameEl!}
          class={`w-fit translate-x-[1000px] text-gray-200 px-10 flex flex-row md:flex-row gap-5`}
        >
          <div>Praphan</div>
          <div> Oranphanlert</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScene;
