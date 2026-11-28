'use client'

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/shared/lib/utils"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/shared/ui/kit/alert-dialog"

/**
 * "Logout" item with a confirmation dialog. State-based (no element ids), so it works however
 * many copies of the sidebar are mounted (desktop column + mobile drawer).
 */
export const LogoutAction = ({ className }: { className?: string }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button
                    type="button"
                    className={cn(
                        "flex w-full items-center gap-3 rounded-radius-ui px-4 py-3 text-left text-base text-primary-text transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        className,
                    )}
                >
                    <LogOut className="size-5 shrink-0" aria-hidden="true" />
                    Logout
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[340px] rounded-3xl">
                <AlertDialogHeader className="items-center text-center sm:text-center">
                    <img src="/images/logout.svg" alt="" className="mb-2 w-[58%]" />
                    <AlertDialogTitle className="text-lg font-bold text-primary-text">
                        Are you sure you want to log out?
                    </AlertDialogTitle>
                    <AlertDialogDescription>You will need to sign in again to use the dashboard.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-row justify-center gap-3 sm:justify-center">
                    <AlertDialogCancel className="w-[100px] rounded-full">No</AlertDialogCancel>
                    <AlertDialogAction
                        className="w-[100px] rounded-full bg-destructive text-white hover:bg-destructive/90"
                        onClick={() => signOut()}
                    >
                        Yes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
