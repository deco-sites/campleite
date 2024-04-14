import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

export default function Weather({ temperature }: Props) {
  return (
    <div>
      <h3>Weather</h3>
      {temperature && <span>{temperature.celsius}</span>}
    </div>
  );
}
