'use client';
import { useRouter } from 'next/navigation';

export default function UserSettings() {
  const router = useRouter();

  const handleClose = () => {
    // Kembali ke halaman sebelumnya
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#1D282C] p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">User Settings</h1>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-[#324549] rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
        </div>
        
        {/* Konten settings disini */}
        <div className="bg-[#324549] rounded-lg p-6">
          {/* Contoh konten */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl mb-4">Profile Settings</h2>
              {/* Form fields */}
            </div>
            <div>
              <h2 className="text-xl mb-4">Notification Settings</h2>
              {/* Notification toggles */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 