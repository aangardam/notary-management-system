"use client"
import { RootLayout } from "@/shared/components/layout/root-layout"
import { useUserStore } from '@/shared/store/user.store';

export default function Page() {
  const { role } = useUserStore()
  return (
    <RootLayout title="Welcome Page">
      <h1 className="text-xl font-bold mb-6">
          Welcome back {role}
      </h1>

    </RootLayout>
  )
}
