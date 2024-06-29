'use client'
import {
  createEffect,
  createSignal,
  on,
  onCleanup,
  onMount,
  type Component,
} from "solid-js";
import WelcomeScene from "./presentations/welcome-scene";
import {
  setWindowHeight,
  setWindowWidth,
  setScrollY,
  windowHeight,
  windowWidth,
} from "./presentations/signals";

const PresentationView: Component<{}> = (props) => {
  const handleResize = (_ev?: UIEvent) => {
        console.log("resize");

    // console.log("windowHeight", window.innerHeight);
    setWindowHeight(window.innerHeight);
    setWindowWidth(document.documentElement.clientWidth);
    // setClientWidth(window.innerWidth - document.documentElement.clientWidth);
  };

  const handleScroll = (ev?: Event) => {
    if (!ev) {
      return setScrollY(0);
    }
    setScrollY(window.scrollY);
  };

  const handleScene1 = () => {};

  onMount(() => {
    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
  });

  createEffect(on(windowHeight, (wh) => {}));

  return (
    <div>
      <WelcomeScene
        // windowHeight={windowHeight}
        // windowWidth={windowWidth}
        // scrollY={scrollY}
        style={{
          "z-index": 10,
        }}
      />
      <div
        class="scene-1 min-h-lvh"
        style={{
          "z-index": 100,
        }}
      >
        test
      </div>
      <div class="scene-2 min-h-lvh" style={{ "z-index": 100 }}>
        test
      </div>
    </div>
  );
};

export default PresentationView;
