'use client'
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { AuthModal } from "./modals";
import { ProfileButton } from "./profile-button";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart=true, className }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();
  React.useEffect(() => {
    let toastMessage = '';

   

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);
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
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>
         <ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>
          {hasCart && <div>
            <CartButton />
          </div>}
        </div>
      </Container>
    </header>
  );
};
