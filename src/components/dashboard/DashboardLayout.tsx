import AiNavbar from '@/components/ai-powered-smart-form/AiNavbar';
import SideNavbarDashboard from './SideNavbarDashboard';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AiNavbar />
      <div className="min-h-screen max-w-[1440px] mx-auto w-full flex font-sans border-t border-t-[#99A6B8]">
        <SideNavbarDashboard />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}