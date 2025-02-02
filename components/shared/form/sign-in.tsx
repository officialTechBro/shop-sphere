'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signInDefaultValue } from "@/lib/constants"
import Link from "next/link"
import { signInWithCredentials } from "@/lib/actions/user.action"
import { useFormStatus } from "react-dom"
import { useActionState } from "react"

import { useSearchParams } from "next/navigation"

const initialState = {
    success: false,
    message: ''
}

const CredentialaSignInForm = () => {

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'

    const [state, action] = useActionState(signInWithCredentials, initialState)
    
    const SignInButton = () => {
        const {pending} = useFormStatus()
        return (
            <Button disabled={pending} variant='default' className="w-full">
                {pending ? 'Please wait ...' : 'Sign In'}
            </Button>
        )
    }

  return <form action={action}>
    <input type="hidden" name="callbackUrl" value={callbackUrl} />
    <div className="space-y-6">
        <div>
            <Label htmlFor="email">Email</Label>
            <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                autoComplete="email" 
                defaultValue={signInDefaultValue.password}
            />
        </div>
        <div>
            <Label htmlFor="password">Password</Label>
            <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                autoComplete="password" 
                defaultValue={signInDefaultValue.password}
            />
        </div>
        <div>
            <SignInButton />
        </div>

         {state && !state.success && (
            <div className="text-center text-destructive">
                {state.message}
            </div>
        )}

        <div className="text-sm text-center text-muted-foreground">
            Dont&apos;t have an account? {' '}
            <Link href='/sign-up' target="_self" className="link">Sign Up</Link>
        </div>
    </div>
  </form>
}
export default CredentialaSignInForm