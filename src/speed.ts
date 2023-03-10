const maxSpeed = 220;

let currentSpeed = 0;

export const getCurrentSpeed = () => currentSpeed;
export const accelerate = () => {
  currentSpeed = Math.min(currentSpeed + 2, maxSpeed);
  return currentSpeed;
};

export const maintainSpeed = () => {
  return currentSpeed;
};

export const decelerate = () => {
  currentSpeed = Math.max(currentSpeed - 1, 0);
  return currentSpeed;
};

export const brake = () => {
  currentSpeed = Math.max(currentSpeed - 5, 0);
  return currentSpeed;
};
