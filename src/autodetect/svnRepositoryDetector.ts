

import { codicons } from "vscode-ext-codicons";
import { CustomRepositoryDetector } from "./repositoryDetector";

export class SvnRepositoryDetector extends CustomRepositoryDetector {

    protected getIcon(): string {
        return codicons.zap;
    }
}
