import { InputAsset } from './input-asset';
import { OutputAsset } from './output-asset';
import { Project } from './project';
export declare abstract class AssetGenerator {
    options: AssetGeneratorOptions;
    constructor(options: AssetGeneratorOptions);
    abstract generate(asset: InputAsset, project: Project): Promise<OutputAsset[]>;
}
export interface AssetGeneratorOptions {
    iconBackgroundColor?: string;
    iconBackgroundColorDark?: string;
    splashBackgroundColor?: string;
    splashBackgroundColorDark?: string;
    pwaManifestPath?: string;
    pwaNoAppleFetch?: boolean;
    logoSplashScale?: number;
    logoSplashTargetWidth?: number;
    androidFlavor?: string;
}
