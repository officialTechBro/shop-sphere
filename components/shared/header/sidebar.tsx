import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react"
import { ModeToggle } from "./mode-toggler"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Sidebar = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetTitle>Menu</SheetTitle>
                <ModeToggle />
                <Button variant='outline' asChild>
                    <Link href='/cart'>
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild>
                     <Link href='/sign-in'>
                        <UserIcon /> Sign In
                     </Link>
                </Button>
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
    </nav>
  )
}
export default Sidebar