import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-bold"
          >
            <span>Starter</span>
          </Link>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
