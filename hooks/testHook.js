"use client"; // Ensure this is a client component

import { useState } from "react";

export default function useTestHook() {
  const [testValue, setTestValue] = useState("Test");

  return testValue;
}
