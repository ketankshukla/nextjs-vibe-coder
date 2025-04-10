"use client";

import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32">
      <Image
        src="/images/ketan_profile.jpg"
        alt="Ketan Shukla"
        fill
        className="rounded-full object-cover object-center border-2 border-[#FFD43B] shadow-lg"
        priority
      />
    </div>
  );
}
