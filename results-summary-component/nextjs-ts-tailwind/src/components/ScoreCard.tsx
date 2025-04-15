const bgColors: Record<string, string> = {
  Reaction: "bg-light-red/5",
  Memory: "bg-orangey-yellow/5",
  Verbal: "bg-green-teal/5",
  Visual: "bg-cobalt-blue/5",
};

const textColors: Record<string, string> = {
  Reaction: "text-light-red",
  Memory: "text-orangey-yellow",
  Verbal: "text-green-teal",
  Visual: "text-cobalt-blue",
};

export default function ScoreCard({
  category,
  score,
  iconPath,
  className = "",
}: Readonly<{
  category: string;
  score: number;
  iconPath: string;
  className?: string;
}>) {
  return (
    <div
      className={`${bgColors.hasOwnProperty(category) ? `${bgColors[category]} ${className}` : ""} flex justify-between rounded-[12px] px-[16px] py-[18px] leading-[20px]`}
    >
      <div className="flex items-center space-x-[12px]">
        <img src={iconPath} alt={iconPath} className="h-[20px] w-[20px]" />
        <h3 className={`${textColors[category]}`}>{category}</h3>
      </div>
      <div className="font-bold">
        <span className="mr-[8px] inline-block text-[#343C50]">{score}</span>
        <span className="text-[#7C7D8A]">/ 100</span>
      </div>
    </div>
  );
}
