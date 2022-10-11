type NoopFunc = () => void;

export const noop: NoopFunc = () => {};

export const celciusToFahrenheit = (celcius: number) => {
  // eslint-disable-next-line no-mixed-operators
  return (celcius * 9) / 5 + 32;
};
