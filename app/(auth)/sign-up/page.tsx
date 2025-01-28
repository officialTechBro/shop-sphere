import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { APP_NAME } from "@/lib/constants"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import SignUpForm from "@/components/shared/form/sign-up"

export const metadata: Metadata = {
    title: 'Sign IUp'
}

const SignUpPage = async (props: {
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
                        src='/images/logo.png' 
                        width={80} 
                        height={80} 
                        alt={`${APP_NAME}`}
                        priority={true}
                    />
                </Link>
                <CardTitle className="text-center font-sans">Create Account</CardTitle>
                <CardDescription className="text-center tracking-wider font-sans">Enter your information below to sign up</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <SignUpForm />
            </CardContent>
        </Card>
    </div>
  )
}
export default SignUpPage