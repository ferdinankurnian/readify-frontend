'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  icon: string;
  children?: React.ReactNode;
}

function SidebarLink({ href, icon, children }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link href={href}>
      <button
        className={`p-3 rounded-lg transition-transform active:scale-90 ${
          isActive ? 'bg-[#1D282C]' : 'hover:bg-[#1D282C]'
        }`}
      >
        {children || (
          <span className={`material-symbols-outlined ${isActive ? 'filled' : ''} text-[32px]`}>
            {icon}
          </span>
        )}
      </button>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="w-24 bg-[#324549] flex flex-col items-center justify-between py-4">
      <Link href="/home/library">
        <button className="p-3 rounded-lg">
          <img src="/favicon.ico" width={40} alt="Icon" />
        </button>
      </Link>
      <div className="flex flex-col space-y-4">
        <SidebarLink href="/home/library" icon="home" />
        <SidebarLink href="/mybooks" icon="auto_stories" />
        <SidebarLink href="/history" icon="search_activity" />
        <SidebarLink href="/wishlist" icon="favorite" />
        <SidebarLink href="/notification" icon="notifications" />
      </div>
      <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-[32px]">settings</span>
      </button>
    </div>
  );
}