import { Provider } from "jotai";
import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ClerkProvider>{children}</ClerkProvider>
    </Provider>
  );
}
