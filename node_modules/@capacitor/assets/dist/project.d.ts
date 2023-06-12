import { MobileProject, MobileProjectConfig } from '@trapezedev/project';
import { Assets } from './definitions';
export declare class Project extends MobileProject {
    private assetPath;
    assets: Assets | null;
    directory: string | null;
    assetDir: string;
    constructor(projectRoot: string | undefined, config: MobileProjectConfig, assetPath?: string);
    detectAssetDir(): Promise<void>;
    androidExists(): Promise<boolean | "" | undefined>;
    iosExists(): Promise<boolean | "" | undefined>;
    assetDirExists(): Promise<boolean>;
    assetDirectory(): string;
    loadInputAssets(): Promise<Assets>;
    private loadLogoInputAsset;
    private loadInputAsset;
}
