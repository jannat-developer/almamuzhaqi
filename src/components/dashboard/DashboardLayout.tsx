import AiNavbar from '@/components/ai-powered-smart-form/AiNavbar';
import SideNavbarDashboard from './SideNavbarDashboard';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen'>
      <AiNavbar />
      <div className=" max-w-[1440px] mx-auto w-full flex font-sans ">
        <SideNavbarDashboard />
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}