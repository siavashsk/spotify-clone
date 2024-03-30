"use client";

interface Props {
  value?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<Props> = ({ onChange, value }) => {
  return <div>Slider</div>;
};

export default Slider;
