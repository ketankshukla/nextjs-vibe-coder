"use client";

import Image from 'next/image';

export default function CartoonImage() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <Image
        src="/images/ketan_python_cartoon.png"
        alt="Python Vibe Coder Cartoon"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
