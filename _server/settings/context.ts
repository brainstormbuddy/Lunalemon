import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */

export const createContext = async (ctx?: trpcNext.CreateNextContextOptions) => {
  if (!ctx) {
    return;
  }
  const { req, res } = ctx;
  return {
    req,
    res,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
