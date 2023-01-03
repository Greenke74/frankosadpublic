import { useState, useEffect } from "react";

const useIsOverflow = (ref, callback) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [
    callback,
    ref.current?.scrollHeight,
    ref.current?.clientHeight,
    ref.current?.clientWidth,
  ]);

  return isOverflow;
};

export default useIsOverflow;
