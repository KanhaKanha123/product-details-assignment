import { QueryClient } from "react-query";

// set time to stale or cash whatever you need
export const client = new QueryClient({
    defaultOptions: {
        queries: { staleTime: 5 * (1000 * 60) }
    }
});