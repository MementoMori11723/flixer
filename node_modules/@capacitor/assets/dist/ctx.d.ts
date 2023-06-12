import { Project } from './project';
import { AssetGeneratorOptions } from './asset-generator';
export interface Context {
    projectRootPath?: string;
    args: AssetGeneratorOptions | any;
    project: Project;
    nodePackageRoot: string;
    rootDir: string;
}
export declare function loadContext(projectRootPath?: string): Promise<Context>;
export declare function setArguments(ctx: Context, args: any): void;
