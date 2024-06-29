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
  let sunEl: HTMLImageElement;
  const [step, setStep] = createSignal<number>(0);

  const cssAnimateClass = ["transition-transform", "duration-700"];

  createEffect(
    on([step, windowHeight, windowWidth, scrollY], ([s, h, w, sy]) => {
      if (s === 0) {
        // setup
        textEl.style.fontSize = `${Math.floor(w / 30)}px`;
        myNameEl.style.fontSize = `${Math.floor(w / 15)}px`;

        // sunEl.style.top = `${h - sunEl.offsetHeight}px`;
        // console.log("effect step", s, sunEl.offsetHeight);
        sunEl.style.transform = `translateY(-100%)`;
        return;
      }

      if (s === 1) {
        console.log("sy", sy);

        textEl.classList.add(...cssAnimateClass);
        textEl.style.transform = `translateX(${w - textEl.offsetWidth}px)`;
        myNameEl.classList.add(...cssAnimateClass);
        myNameEl.style.transform = `translateX(0px)`;

        sunEl.classList.add(...cssAnimateClass);
        sunEl.style.transform = `translateY(${Math.floor(
          h / sunEl.offsetHeight + sy * 1.25
        )}px)`;

        setTimeout(() => {
          textEl.classList.remove(...cssAnimateClass);
          myNameEl.classList.remove(...cssAnimateClass);
          sunEl.classList.remove(...cssAnimateClass);
          setStep(step() + 1);
        }, 700);
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
        // console.log("background", darkBgEl.offsetHeight);
        textEl.classList.remove(...cssAnimateClass);
        myNameEl.classList.remove(...cssAnimateClass);
        // more animation on scroll
        // const wrapperHeight = wrapperEl.offsetHeight;
        const wrapperWidth = wrapperEl.offsetWidth;
        const ratio = sy / wrapperWidth / 0.5;
        // console.log("ratio", ratio, sy);
        textEl.style.transform = `translateX(calc(${w}px - ${
          textEl.offsetWidth
        }px - ${ratio * sy}px ))`;
        myNameEl.style.transform = `translateX(${sy * ratio}px)`;

        sunEl.style.transform = `translateY(${Math.floor(
          h / sunEl.offsetHeight + sy * 1.25
        )}px)`;
        // textEl.style.opacity = `${1 - ratio}`;
        // myNameEl.style.opacity = `${1 - ratio}`;
      }
    })
  );

  // createEffect(
  //   on(windowWidth, () => {
  //     setStep(1);
  //   })
  // );

  onMount(() => {
    setTimeout(() => {
      setStep(1);
    }, 300);
  });

  return (
    <div
      ref={sceneEl!}
      data-name="welcome-scene"
      class="welcome-scene flex items-end overflow-x-hidden min-h-lvh relative overflow-hidden"
      style={{
        ...props.style,
        "min-height": "100lvh",
      }}
    >
      <div
        data-name="gradient"
        class="h-full w-full absolute top-0 left-0 bg-gradient-to-tr from-blue-300 to-blue-800"
      />
      <img
        data-name="sun"
        ref={sunEl!}
        class="w-32 absolute top-0 left-5 -translate-y-full"
        // style={{ opacity: "0.8" }}
        src="/assets/sun-yellow-spiral.svg"
      />
      <div
        data-name="house"
        class="bg-[url(/assets/cartoon-style-neighborhood-houses-illustration.png)] h-full w-full absolute top-0 left-0 bg-center bg-cover"
      />
      <div
        ref={darkBgEl!}
        data-name="black-bg"
        class="h-full w-full absolute left-0 top-0 bg-black opacity-0"
      />
      <div ref={wrapperEl!} class="wrapper w-full py-10">
        <div
          ref={textEl!}
          class={`-translate-x-full w-fit text-gray-200 px-10`}
        >
          interactive portfolio
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
