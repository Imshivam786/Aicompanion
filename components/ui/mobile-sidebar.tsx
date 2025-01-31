import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "./sheet";
import { Sidebar } from "./sidebar";
export const MobileSidebar = () =>{
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu></Menu>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
                <Sidebar></Sidebar>
            </SheetContent>
        </Sheet>
    )
}