import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggler"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import Sidebar from "./sidebar"
import UserButton from "./user-button"

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
            <UserButton />
        </nav>
        <Sidebar />
    </div>
  )
}
export default Menu