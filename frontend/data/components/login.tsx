/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/LeihNRpK1Ou
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/data/components/ui/card'
import { Label } from '@/data/components/ui/label'
import { Input } from '@/data/components/ui/input'
import { Button } from '@/data/components/ui/button'
import Link from 'next/link'

export function Login() {
  return (
    <div className='flex items-center justify-center h-full bg-background'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1 text-center'>
          <CardTitle className='text-3xl font-bold'>Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your club account.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' placeholder='m@example.com' name='email' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' name='password' required />
          </div>
          <Button type='submit' className='w-full' variant='outline'>
            Sign in
          </Button>
        </CardContent>
        <CardFooter className='flex-col text-xs'>
          Don&apos;t have an account?
          <Link href='/register' className='text-xs underline' prefetch={false}>
            Register your club
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}