import * as vscode from 'vscode';
import { Model } from "./model";


export function activate(context: vscode.ExtensionContext) {

	const model = new Model();

	let disposable = vscode.commands.registerCommand('mvvmgenerator.myExtension', () => {
		
		vscode.window.showInputBox({
			placeHolder: 'Enter module name: '
		}).then(function(data) {
			let moduleName = data;
			
			let pathToCurrentDir = vscode.workspace.rootPath?.toString()
			
			if (pathToCurrentDir == null && moduleName == null){
				console.error("You should open project before use extension !!!");
				return;
			}else {
				model.createMVVMModule(pathToCurrentDir!, moduleName!);
			}
		});

	});

	
	context.subscriptions.push(disposable);
}

export function deactivate() {}
