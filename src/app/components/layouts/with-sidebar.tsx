import Sidebar from '../sidebar';

export default function WithSidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
} 