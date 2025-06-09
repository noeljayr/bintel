export const motionTransiton = (delay?: number) => {
  return {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
    delay: delay ? delay : 0
  };
};
