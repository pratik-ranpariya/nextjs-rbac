"use client";

import { useSession, signOut } from "next-auth/react";
import { useEffect, useCallback } from "react";

export function SessionTimeout() {
  const { data: session } = useSession();

  const resetTimeout = useCallback(() => {
    if (typeof window !== "undefined") {
      // Reset the timer whenever there's user activity
      window.localStorage.setItem("lastActivity", Date.now().toString());
    }
  }, []);

  useEffect(() => {
    if (!session) return;

    // Set up activity listeners
    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
    ];
    events.forEach((event) => document.addEventListener(event, resetTimeout));

    // Check for inactivity every minute
    const interval = setInterval(() => {
      const lastActivity = parseInt(
        window.localStorage.getItem("lastActivity") || "0"
      );
      const now = Date.now();
      const inactiveTime = now - lastActivity;

      // If inactive for 5 minutes (300000 ms), sign out
      if (inactiveTime > 300000) {
        signOut();
      }
    }, 60000); // Check every minute

    // Initial activity timestamp
    resetTimeout();

    // Cleanup
    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, resetTimeout)
      );
      clearInterval(interval);
    };
  }, [session, resetTimeout]);

  return null;
}
