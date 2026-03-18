import React from 'react'
import Image from 'next/image'
// import signInFormClient from '@/features/auth/components/signInFormClient'
import SignInFormClient from '@/features/auth/components/signInFormClient'
import { bg } from 'date-fns/locale/bg'
const SignInPage = () => {
  return (
<div
  className="flex flex-col space-y-6 text-center items-center justify-center">      {/* <Image src="/logo.svg" alt="logo" width={350} height={350} className="mb-5 z-20" /> */}
      <SignInFormClient />
    </div>
  )
}

export default SignInPage
