import {Provider} from "jotai";
import {ClerkProvider} from "@clerk/nextjs";
import {ReactQueryClientProvider} from "@/components/layouts/ReactQueryClientProvider";

export default function Providers({children}: { children: React.ReactNode }) {
    return (
        <ReactQueryClientProvider>
            <Provider>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
            </Provider>
        </ReactQueryClientProvider>
    );
}
