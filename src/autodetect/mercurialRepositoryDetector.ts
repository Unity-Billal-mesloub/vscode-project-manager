
import { codicons } from "vscode-ext-codicons";
import { CustomRepositoryDetector } from "./repositoryDetector";

export class MercurialRepositoryDetector extends CustomRepositoryDetector {

    protected getIcon(): string {
        return codicons.git_branch;
    }
}
