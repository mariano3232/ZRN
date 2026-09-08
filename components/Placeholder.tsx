type PlaceholderProps = {
  className?: string;
};

export function Placeholder({ className = "" }: PlaceholderProps) {
  return <div aria-hidden className={`bg-white ${className}`} />;
}
