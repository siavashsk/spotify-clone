"use client";

import AuthModal from "@/components/authModal";
import SubscribeModal from "@/components/subscribeModal";
import UploadModal from "@/components/uploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal />
    </>
  );
};

export default ModalProvider;
