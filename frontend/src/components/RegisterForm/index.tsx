'use client'

import { useRouter } from 'next/navigation'
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
import { Textarea } from '@/data/components/ui/textarea'
import { Button } from '@/data/components/ui/button'
import { useFormState } from 'react-dom'
import { register } from '@/auth'
import { useEffect } from 'react'

const initialState = {
  error: '',
  message: '',
}

export function RegisterForm() {
  const [state, formAction] = useFormState(register, initialState)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push(`/club/${state.cid}`) // Redirect to the club's page
    }
  }, [state?.success, state.cid, router])

  return (
    <form
      action={formAction}
      className='flex items-center justify-center h-full bg-background my-10'
    >
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1 text-center'>
          <CardTitle className='text-3xl font-bold'>Register</CardTitle>
          <CardDescription>Enter your information to register your club.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email*</Label>
            <Input name='email' id='email' type='email' placeholder='m@example.com' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password*</Label>
            <Input name='password' id='password' type='password' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='name'>Club Name*</Label>
            <Input name='name' id='name' placeholder='Club name...' required />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              placeholder='Club description...'
              name='description'
              className='min-h-[100px]'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='instagram'>Instagram</Label>
            <Input
              name='instagram'
              id='instagram'
              placeholder='https://www.instagram.com/username/'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='discord'>Discord</Label>
            <Input name='discord' id='discord' placeholder='discord.gg/' />
          </div>
        </CardContent>
        <CardFooter>
          {state?.error && <p className='text-red-500 text-xs'>{state.error}</p>}
          {state?.message && <p className='text-green-500 text-xs'>{state.message}</p>}
          <Button type='submit' className='w-full' variant='outline'>
            Register
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
