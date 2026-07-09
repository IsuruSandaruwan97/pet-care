"use client";

import { ErrorScreen } from "@/screens/error";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorScreen
      code={500}
      message={error.message}
      reset={reset}
      title="Something went wrong"
    />
  );
}
