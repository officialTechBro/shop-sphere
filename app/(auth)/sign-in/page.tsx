import CredentialaSignInForm from "@/components/shared/form/sign-in"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { APP_NAME } from "@/lib/constants"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: 'Sign In'
}

const SignInPage = async (props: {
    searchParams: Promise<{callbackUrl: string}>
}) => {

    const {callbackUrl} = await props.searchParams

    const session = await auth()
    
    if (session) {
        return redirect(callbackUrl || '/')
    }
  return (
    <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4">
                <Link href='/' className="flex-center">
                    <Image 
                        src='/images/logo.svg' 
                        width={80} 
                        height={80} 
                        alt={`${APP_NAME}`}
                        priority={true}
                    />
                </Link>
                <CardTitle className="text-center font-sans">Sign in</CardTitle>
                <CardDescription className="text-center tracking-wider font-sans">Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <CredentialaSignInForm />
            </CardContent>
        </Card>
    </div>
  )
}
export default SignInPage