"use client";
import React, { useEffect } from "react";
import { SmartHeader } from "./SmartHeader";
import { ContactModal } from "./ContactModal";

export function HeaderAndModal() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  
  useEffect(() => {
    const openModal = () => setIsContactModalOpen(true);
    document.addEventListener("open-contact-modal", openModal);
    return () => document.removeEventListener("open-contact-modal", openModal);
  }, []);

  return (
    <>
      <SmartHeader onContactClick={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
