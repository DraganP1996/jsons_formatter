import { useEffect, useState } from "react";

export const useClientSideChecker = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};
