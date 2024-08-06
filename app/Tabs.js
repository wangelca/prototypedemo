'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Tabs() {
  const [hovered, setHovered] = useState(null);

  const tabs = [
    { id: 1, href: '/modify-parks', src: '/bridge.jpg', alt: 'Modify Parks' },
    { id: 2, href: '/membership-details', src: '/cliffside.jpg', alt: 'Membership Details' },
    { id: 3, href: '/notifications', src: '/mountain.jpg', alt: 'Notifications & Messages' },
    { id: 4, href: '/event-manager', src: '/topview.jpg', alt: 'Generate Reports' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {tabs.map((tab) => (
        <Link
          href={tab.href}
          key={tab.id}
          className="relative"
          onMouseEnter={() => setHovered(tab.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={tab.src}
            alt={tab.alt}
            className={`h-160 w-80 object-cover transition-all duration-300 ease-in-out ${
              hovered !== null && hovered !== tab.id ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              hovered !== null && hovered !== tab.id ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="text-white text-lg font-semibold bg-black bg-opacity-60 px-4 py-2 rounded">
              {tab.alt}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
















  