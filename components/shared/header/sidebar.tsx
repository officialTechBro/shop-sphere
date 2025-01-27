import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { EllipsisVertical, ShoppingCart } from "lucide-react"
import { ModeToggle } from "./mode-toggler"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import UserButton from "./user-button"

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
                <UserButton />
                <SheetDescription></SheetDescription>
            </SheetContent>
        </Sheet>
    </nav>
  )
}
export default Sidebar