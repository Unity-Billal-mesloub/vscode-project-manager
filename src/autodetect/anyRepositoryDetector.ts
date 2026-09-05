
import { codicons } from "vscode-ext-codicons";
import { CustomRepositoryDetector } from "./repositoryDetector";

export class AnyRepositoryDetector extends CustomRepositoryDetector {

    protected getIcon(): string {
        return codicons.file_directory;
    }
}
