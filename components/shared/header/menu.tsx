import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggler"
import Link from "next/link"
import { ShoppingCart, UserIcon } from "lucide-react"
import Sidebar from "./sidebar"

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
        <nav className="hidden md:flex w-full max-w-sm space-x-2">
            <ModeToggle />
            <Button variant='ghost' asChild>
                    <Link href='/cart'>
                    <ShoppingCart /> Cart
                    </Link>
            </Button>
            <Button asChild>
                    <Link href='/sign-in'>
                    <UserIcon /> Sign In
                    </Link>
            </Button>
        </nav>
        <Sidebar />
    </div>
  )
}
export default Menu