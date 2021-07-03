import Star from "../Star/Star";

export default function Stars({ data }) {
  return data.map((s, i) => {
    return (
      <Star
        variant={s.variant}
        height={s.height}
        x={s.x}
        y={s.y}
        delay={s.delay}
        color={s.color}
        key={i}
      />
    );
  });
}
