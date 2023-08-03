import Navbar from "@/components/Navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    return (
        <div className="h-full" >
            <Navbar></Navbar>
            <main className="md:pl-20 pt-16 w-full">
            {children}
            </main>
        </div>
    );
}

export default AuthLayout;