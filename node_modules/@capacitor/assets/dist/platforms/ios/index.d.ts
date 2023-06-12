import { InputAsset } from '../../input-asset';
import { OutputAsset } from '../../output-asset';
import { Project } from '../../project';
import { AssetGenerator, AssetGeneratorOptions } from '../../asset-generator';
export declare const IOS_APP_ICON_SET_NAME = "AppIcon";
export declare const IOS_APP_ICON_SET_PATH: string;
export declare const IOS_SPLASH_IMAGE_SET_NAME = "Splash";
export declare const IOS_SPLASH_IMAGE_SET_PATH: string;
export declare class IosAssetGenerator extends AssetGenerator {
    constructor(options?: AssetGeneratorOptions);
    generate(asset: InputAsset, project: Project): Promise<OutputAsset[]>;
    private generateFromLogo;
    private _generateIcons;
    private generateIconsForLogo;
    private generateIcons;
    private generateNotificationIcons;
    private generateSettingsIcons;
    private generateSpotlightIcons;
    private generateSplashes;
    private updateIconsContentsJson;
    private updateSplashContentsJson;
    private updateSplashContentsJsonDark;
}
