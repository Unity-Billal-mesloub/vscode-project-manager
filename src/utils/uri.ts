
import { Uri } from "vscode";
import { isRemotePath } from "./remote";

export function buildProjectUri(rootPath: string): Uri {
    return isRemotePath(rootPath) ? Uri.parse(rootPath) : Uri.file(rootPath);
}
