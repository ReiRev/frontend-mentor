export default function Divider({
  color,
  className,
}: Readonly<{
  height?: number;
  color: string;
  className?: string;
}>) {
  return <hr className={`h-px bg-${color} border-0 block ${className ? className : ""} block`} />;
}
