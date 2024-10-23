"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@lib/utils";

interface ModalProps {
  triggerText?: string;
  triggerClassName?: string;
  trigger?: React.ReactNode;
  children: React.ReactNode;
}

export const ModalRoot: React.FC<ModalProps> = ({
  triggerText = "Open Modal",
  children,
  triggerClassName,
  trigger,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {trigger ? (
        <a
          onClick={() => setIsOpen(true)}
          className={cn(triggerClassName)}
          {...rest}
        >
          {trigger}
        </a>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={cn("btn-primary", triggerClassName)}
          {...rest}
        >
          {triggerText}
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div
            ref={modalRef}
            className="rounded-lg p-2 w-full max-w-3xl shadow-lg relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute w-50 h-50 p-4 text-2xl top-20 right-20 text-white hover:text-gray-500"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
