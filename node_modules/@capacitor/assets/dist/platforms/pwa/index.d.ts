import { InputAsset } from '../../input-asset';
import { OutputAsset } from '../../output-asset';
import { Project } from '../../project';
import { AssetGenerator, AssetGeneratorOptions } from '../../asset-generator';
export declare const PWA_ASSET_PATH = "icons";
export interface ManifestIcon {
    src: string;
    size?: string | number;
    sizes?: string;
    destination?: string;
    purpose?: string;
    type?: string;
}
export declare class PwaAssetGenerator extends AssetGenerator {
    constructor(options?: AssetGeneratorOptions);
    getManifestJson(project: Project): Promise<any>;
    getSplashSizes(): Promise<string[]>;
    generate(asset: InputAsset, project: Project): Promise<OutputAsset[]>;
    private generateFromLogo;
    private _generateSplashFromLogo;
    private generateIcons;
    private getPWADirectory;
    private getPWAAssetsDirectory;
    private getManifestJsonPath;
    private updateManifest;
    private makeIconManifestEntry;
    private generateSplashes;
    private _generateSplash;
    static logInstructions(generated: OutputAsset[]): void;
}
