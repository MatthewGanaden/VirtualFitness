import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center mx-auto max-w-[1300px] h-[47px]">
        <a href="">
          <Image src={`/icons/Virtual Fitness With Logo.svg`} alt={'Virtual Fitness With Logo'} width="236" height="36" />
        </a>
        <div className="flex gap-[35px]">
          <Image src={`/icons/cart.svg`} alt={'cart'} width="24" height="24" />
          <Image src={`/icons/user.svg`} alt={'user'} width="24" height="24" />
          <Image src={`/icons/icon.svg`} alt={'nav'} width="20" height="16" />
        </div>
      </div>
    </div>
  )
}
