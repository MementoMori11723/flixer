import { InputAsset } from '../../input-asset';
import { AssetGenerator, AssetGeneratorOptions } from '../../asset-generator';
import { OutputAsset } from '../../output-asset';
import { Project } from '../../project';
export declare class AndroidAssetGenerator extends AssetGenerator {
    constructor(options?: AssetGeneratorOptions);
    generate(asset: InputAsset, project: Project): Promise<OutputAsset[]>;
    /**
     * Generate from logo combines all of the other operations into a single operation
     * from a single asset source file. In this mode, a logo along with a background color
     * is used to generate all icons and splash screens (with dark mode where possible).
     */
    private generateFromLogo;
    private _generateAdaptiveIconsFromLogo;
    private _generateSplashesFromLogo;
    private generateLegacyIcon;
    private generateLegacyLauncherIcon;
    private generateRoundLauncherIcon;
    private generateAdaptiveIconForeground;
    private _generateAdaptiveIconForeground;
    private generateAdaptiveIconBackground;
    private _generateAdaptiveIconBackground;
    private updateManifest;
    private generateSplashes;
    private generateSplash;
    private getResPath;
}
