import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { Triangle } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold">
            <Triangle className="h-8 w-8" />
            <span>Starter</span>
          </Link>
        </div>

        <RegisterForm />
      </div>
    </div>
  )
}
