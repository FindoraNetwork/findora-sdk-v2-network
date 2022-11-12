import { Sdk } from '@findora-network/findora-sdk-v2-core';
declare type SdkEnvironment = Partial<typeof Sdk.environment>;
export declare class Environment {
    static config: SdkEnvironment;
    static init(sdkEnv: SdkEnvironment): void;
    static reset(): void;
}
export {};
