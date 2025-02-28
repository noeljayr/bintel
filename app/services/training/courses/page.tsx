"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    router.push("/services/training");
  }, [pathname, router]);
  return <></>;
}

export default Page;