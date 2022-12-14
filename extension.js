// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
 function activate(context) {
	let disposable = vscode.commands.registerCommand('jamtimer.helloWorld', function () {
		vscode.window.showInformationMessage('Timer Started');
	})

	context.subscriptions.push(disposable);
	const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

	statusBar.text = (`$(symbol-event) JamTimer`);
	statusBar.command = 'jamtimer.helloWorld';
	statusBar.show();
}


// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
