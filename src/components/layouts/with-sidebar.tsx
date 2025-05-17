import Sidebar from '../sidebar';

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-24 w-screen overflow-x-hidden">
        {children}
      </div>
    </div>
  );
} 