
import { ThemeColor, window } from 'vscode';
import { Container } from '../core/container';

export function registerSideBarDecorations() {
    window.registerFileDecorationProvider({
        provideFileDecoration: (uri) => {
            if (uri.scheme !== 'projectManager-view') return undefined;

            if (Container.currentProject && uri.path === Container.currentProject.rootPath) {
                return {
                    badge: '✔',
                    color: new ThemeColor('projectManager.sideBar.currentProjectHighlightForeground')
                };
            }
        }
    });
}
