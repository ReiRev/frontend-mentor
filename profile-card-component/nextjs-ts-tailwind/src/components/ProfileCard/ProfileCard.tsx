import bgPatternCard from "./bg-pattern-card.svg";
import ProfileStats from "./ProfileStats";

export default function ProfileCard({
  username,
  age,
  location,
  avatarImagePath,
}: Readonly<{
  username: string;
  age: number;
  location: string;
  avatarImagePath: string;
}>) {
  return (
    <div
      className="mx-auto w-[326px] space-y-[24px] rounded-[15px] bg-white pt-[140px] lg:w-[350px]"
      style={{
        backgroundImage: `url(${bgPatternCard.src})`,
        backgroundSize: "100% 140px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <img
        src={avatarImagePath}
        alt=""
        className="mx-auto mt-[-48px] block h-[106px] w-[106px] rounded-full border-[5px] border-white"
      />
      <div className="mx-auto mt-[-10px] space-y-[8px] text-center">
        <h1 className="flex items-center justify-center space-x-[9px] align-text-top text-[18px] font-bold leading-[23px]">
          <span className="inline">{username}</span>
          <span className="text-dark-gray font-normal">{age}</span>
        </h1>
        <span className="text-dark-gray block text-[14px] leading-[18px]">{location}</span>
      </div>
      <div className="flex items-center justify-center space-x-[38px] border-t-[1px] border-[#BEBFC1] py-[24px] text-center">
        <ProfileStats title="Followers" value="80K" />
        <ProfileStats title="Likes" value="803K" />
        <ProfileStats title="Photos" value="1.4K" />
      </div>
    </div>
  );
}
