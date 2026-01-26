import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If we've already animated and triggerOnce is true, don't observe again
    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);

        if (inView && triggerOnce) {
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return { ref, isInView: isInView || (hasAnimated && triggerOnce) };
}

// Hook for staggered animations on lists
export function useStaggeredInView(itemCount, options = {}) {
  const { ref, isInView } = useInView(options);
  const { staggerDelay = 100 } = options;

  const getItemDelay = (index) => {
    return isInView ? index * staggerDelay : 0;
  };

  const getItemStyle = (index) => {
    return {
      transitionDelay: `${getItemDelay(index)}ms`,
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'translateY(0)' : 'translateY(20px)',
    };
  };

  return { ref, isInView, getItemDelay, getItemStyle };
}

export default useInView;
