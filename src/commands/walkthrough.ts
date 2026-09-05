
import { commands } from "vscode";
import { Container } from "../core/container";

function openSideBar() {
    commands.executeCommand("projectsExplorerFavorites.focus");
}

export function registerWalkthrough() {
    Container.context.subscriptions.push(commands.registerCommand("_projectManager.openSideBar", () => openSideBar()));
}
