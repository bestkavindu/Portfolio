"use client";

import { useEffect, useRef, useState } from "react";
import { MailIcon } from "./icons";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard?.writeText(email);
    } catch {
      return; // clipboard blocked — don't claim success
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button type="button" className="cli" onClick={copy}>
      <MailIcon />
      <span>{email}</span>
      <span className="cli-a">{copied ? "copied" : "copy"}</span>
    </button>
  );
}
