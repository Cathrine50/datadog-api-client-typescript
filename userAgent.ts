import { version } from "./version";

export const getUserAgent = async (): Promise<string> => {
  const userAgentType = `datadog-api-client-typescript/${version}`;

  let userAgentString = "uknown";

  if (typeof window?.navigator !== "undefined") {
    userAgentString = `${window.navigator.userAgent}`;
  } else if (typeof process !== "undefined" && typeof process?.versions?.node !== "undefined") {
    const os = await import("os");

    userAgentString = `(node ${process.versions.node}; os ${os.type()}; arch ${os.arch()})`;
  }

  return `${userAgentType} ${userAgentString}`;
};
