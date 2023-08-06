import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const AuthLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    return (
        <div className="h-full" >
            <Navbar></Navbar>
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-1">
            <Sidebar></Sidebar>
            </div>
            <main className="md:pl-20 pt-16 w-full">
            {children}
            </main>
        </div>
    );
}

export default AuthLayout;