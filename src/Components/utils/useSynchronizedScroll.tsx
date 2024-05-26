import { useEffect, RefObject } from "react";

const useSynchronizedScroll = (
  ref1: RefObject<HTMLElement>,
  ref2: RefObject<HTMLElement>
) => {
  useEffect(() => {
    const element1 = ref1.current;
    const element2 = ref2.current;

    if (element1 && element2) {
      const isSyncing = { from1: false, from2: false };

      const syncScroll = (
        source: HTMLElement,
        target: HTMLElement,
        sourceFlag: keyof typeof isSyncing,
        targetFlag: keyof typeof isSyncing
      ) => {
        if (isSyncing[sourceFlag]) return;

        const percentage =
          source.scrollTop / (source.scrollHeight - source.clientHeight);
        const newScrollTop =
          percentage * (target.scrollHeight - target.clientHeight);

        if (Math.abs(target.scrollTop - newScrollTop) > 1) {
          isSyncing[targetFlag] = true;
          target.scrollTop = newScrollTop;
        }

        setTimeout(() => {
          isSyncing[targetFlag] = false;
        }, 0);
      };

      const handleScroll1 = () =>
        syncScroll(element1, element2, "from1", "from2");
      const handleScroll2 = () =>
        syncScroll(element2, element1, "from2", "from1");

      element1.addEventListener("scroll", handleScroll1);
      element2.addEventListener("scroll", handleScroll2);

      return () => {
        element1.removeEventListener("scroll", handleScroll1);
        element2.removeEventListener("scroll", handleScroll2);
      };
    }
  }, [ref1, ref2]);
};

export default useSynchronizedScroll;
