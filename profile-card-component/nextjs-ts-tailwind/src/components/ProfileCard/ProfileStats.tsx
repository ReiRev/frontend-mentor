export default function ProfileStats({
  title,
  value,
}: Readonly<{
  title: string;
  value: string;
}>) {
  return (
    <div>
      <span className="block px-[2px] pb-[3px] text-[18px] font-bold leading-[22px]">{value}</span>
      <span className="text-dark-gray block text-[10px] tracking-[1.5px]">{title}</span>
    </div>
  );
}
