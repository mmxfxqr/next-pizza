import { prisma } from "@/prisma/prisma-client";
import { ProfileForm } from "@/shared/components";
import { getUserSession } from "@/shared/lib/get-user-session";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getUserSession();
  if (!session) {
    redirect("/not-auth");
  }
  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });
  if (!user) {
    redirect("/not-auth");
  }
  return <ProfileForm data={user} />;
}
