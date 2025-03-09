'use client';
import * as Tooltip from '@radix-ui/react-tooltip';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
  href: string;
  icon: string;
  tooltip: string;
  activePatterns?: string[];
}

function SidebarLink({ href, icon, tooltip, activePatterns = [] }: SidebarLinkProps) {
  const pathname = usePathname();
  
  // Fungsi untuk mengecek apakah path saat ini termasuk dalam pattern yang aktif
  const isActive = activePatterns.length > 0
    ? activePatterns.some(pattern => pathname.startsWith(pattern))
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link href={href}>
            <button
              className={`p-3 rounded-lg transition-transform active:scale-90 ${
                isActive ? 'bg-[#1D282C]' : 'hover:bg-[#1D282C]'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'filled' : ''} text-[32px]`}>
                {icon}
              </span>
            </button>
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-[#1D282C] px-3 py-1.5 rounded-md text-sm text-white shadow-lg"
            side="right"
            sideOffset={5}
            align="center"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-[#1D282C]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
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
        <SidebarLink 
          href="/home/library" 
          icon="home"
          tooltip="Home"
          activePatterns={['/home/library', '/home/books', '/home/categories']}
        />
        <SidebarLink 
          href="/mybooks" 
          icon="auto_stories" 
          tooltip="My Books"
        />
        <SidebarLink 
          href="/history" 
          icon="search_activity" 
          tooltip="History"
        />
        <SidebarLink 
          href="/wishlist" 
          icon="favorite" 
          tooltip="Wishlist"
        />
        <SidebarLink 
          href="/notification" 
          icon="notifications" 
          tooltip="Notifications"
        />
      </div>
      <Tooltip.Provider delayDuration={0}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link href="/user-settings">
              <button className="p-3 rounded-lg hover:bg-[#1D282C] active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[32px]">settings</span>
              </button>
            </Link>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-[#1D282C] px-3 py-1.5 rounded-md text-sm text-white shadow-lg"
              side="right"
              sideOffset={5}
              align="center"
            >
              Settings
              <Tooltip.Arrow className="fill-[#1D282C]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
}