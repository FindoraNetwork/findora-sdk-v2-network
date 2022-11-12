import { Sdk } from '@findora-network/findora-sdk-v2-core';

type SdkEnvironment = Partial<typeof Sdk.environment>;

export class Environment {
  public static config: SdkEnvironment = { ...Sdk.environment };

  public static init(sdkEnv: SdkEnvironment): void {
    Environment.config = { ...Sdk.environment, ...sdkEnv };
  }

  public static reset(): void {
    Environment.config = { ...Sdk.environment };
  }
}
