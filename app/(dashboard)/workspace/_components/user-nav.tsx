import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogoutLink, PortalLink } from "@kinde-oss/kinde-auth-nextjs/components"
import { CreditCard, LogOut, User } from "lucide-react"

const user = {
    name: "Charlie Nguyen",
    email: "LbB0b@example.com",
    imageUrl: "",
}

export default function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                    <Avatar>
                        <AvatarImage
                            src={user.imageUrl ?? null}
                            alt="user image"
                            className="object-cover"
                        />
                        <AvatarFallback className="bg-transparent">
                            {user.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align={'end'}
                side={'right'}
                sideOffset={8}
            >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <User />
                        <PortalLink>
                            User
                        </PortalLink>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <CreditCard />
                        <PortalLink>
                            Billing
                        </PortalLink>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <LogOut />
                        <LogoutLink>
                            Logout
                        </LogoutLink>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}