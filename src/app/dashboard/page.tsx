"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, []);

  return <></>;
};

export default Dashboard;
