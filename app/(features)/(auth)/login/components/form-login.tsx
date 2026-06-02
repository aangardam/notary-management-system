"use client";

import { LogIn, ShieldCheck } from "lucide-react";

import { Form } from "@/shared/components/ui/form";
import { Button } from "@/shared/components/ui/button";

import FormInput from "@/shared/components/form/form-input";

import useLogin from "../hooks/use-login";

const FormLogin = () => {
  const { form, handleSubmit, isLoading } = useLogin();

    return (
    <div className="w-full rounded-xl bg-white p-8 shadow-lg">
        <div
            className="
                mb-6
                h-1.5
                w-20
                rounded-full
                bg-linear-to-r
                from-emerald-700
                to-emerald-400
            "
        />

        <h1
            className="
                font-heading
                text-4xl
                font-semibold
                text-slate-900
            "
        >
            Welcome back
        </h1>

        <p className="mt-3 text-slate-500 mb-3">
            Sign in to continue to your account
        </p>

        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
            >
                <FormInput
                    name="email"
                    label="Email Address"
                    placeholder="admin@mail.com"
                    control={form.control}
                />

                <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    isPassword
                    placeholder="••••••••"
                    control={form.control}
                />

                <Button
                    type="submit"
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="
                        h-12
                        w-full
                        rounded-xl
                        bg-emerald-700
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:bg-emerald-800
                        hover:shadow-xl
                        hover:scale-[1.01]
                    "
                >
                    <LogIn className="h-4 w-4 mr-3" />
                    Login
                </Button>

                <div className="flex items-center justify-center gap-2 pt-2 text-sm text-slate-500">
                    <ShieldCheck className="h-4 w-4" />

                    <span>
                    Secure access to your notary management system
                    </span>
                </div>
            </form>
        </Form>
    </div>
  );
};

export default FormLogin;