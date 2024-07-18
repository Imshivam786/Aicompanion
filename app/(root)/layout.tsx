import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
        <Navbar/>
        <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
          <Sidebar></Sidebar>
        </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main> 
    </div>
  );
};

export default RootLayout;


/*          ****comments****


 all comments can be found here line wise along with the purpose
purpose: this layout is written for the navigation bar (only present at protected page)

*/
