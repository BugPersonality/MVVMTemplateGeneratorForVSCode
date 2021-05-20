import * as vscode from 'vscode';
import { Model } from "./model";
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {

	const model = new Model();

	let disposable = vscode.commands.registerCommand('mvvmgenerator.myExtension', () => {

		let pathToCurrentDir = vscode.workspace.rootPath?.toString()

		if (pathToCurrentDir == null){
			vscode.window.showErrorMessage("You should open project before use extension !!!");
			// console.error("You should open project before use extension !!!");
			return;
		}

		vscode.window.showInputBox({
			placeHolder: 'Enter module name: '
		}).then(function(data) {
			let moduleName = data;

			let pathToDir = pathToCurrentDir + "/" + moduleName;
			console.log(pathToDir)

			if (fs.existsSync(pathToDir)) {
				vscode.window.showErrorMessage("Folder already exist !! Pls enter another module name");
				// console.error("Folder already exist !! Pls enter another module name");
				return;
			}

			if (moduleName == null){
				vscode.window.showErrorMessage("Enter module name befor create module !!!");
				//console.error("Enter module name befor create module !!!");
				return;
			}else {
				model.createMVVMModule(pathToCurrentDir!, moduleName!);
			}
		});

	});

	
	context.subscriptions.push(disposable);
}

export function deactivate() {}
