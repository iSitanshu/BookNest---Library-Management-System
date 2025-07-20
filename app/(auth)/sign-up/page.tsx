"use client"
import React from 'react'
import AuthForm from "@/components/AuthForm"
import { signUpSchema } from '@/lib/validations';
import { signUp } from '@/lib/actions/auth';

const page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: ""
    }}
    onSubmit={() => {signUp}}
  />
)

export default page;