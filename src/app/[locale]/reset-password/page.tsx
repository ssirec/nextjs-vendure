import { Suspense } from "react";
import type { Metadata } from "next";
import { Loader2 } from "lucide-react";
import { ResetPasswordForm } from "./reset-password-form";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Create a new password for your account.",
};

export default function ResetPasswordPage({
  searchParams,
}: PageProps<'/[locale]/reset-password'>) {
  return (
    <Suspense fallback={<Loader2 className="h-6 w-6 animate-spin" />}>
      <ResetPasswordForm searchParams={searchParams} />
    </Suspense>
  );
}
