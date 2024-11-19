'use client'
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { useSession, signIn } from "next-auth/react";
interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart=true, className }) => {
 const {data: session} = useSession()
 console.log(session, 999)
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href={"/"}>
          <div className="flex item-center gap-4">
            <Image src="/logo.png" alt="logo" width={85} height={85} />
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl uppercase font-black">Taxizza Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        {/* Центральная часть */}
        {hasSearch && <div className="mx-10 flex-1">
          <SearchInput />
        </div>}
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button onClick={() => signIn('github', {callbackUrl: '/', redirect: true})}  variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          {hasCart && <div>
            <CartButton />
          </div>}
        </div>
      </Container>
    </header>
  );
};
