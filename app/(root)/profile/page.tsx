import { getUserSession } from "@/shared/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();
  if(!session){
    redirect('/not-auth')
  }
  return <div className="text-red-200">ПРОФИЛЬ</div>;
}
