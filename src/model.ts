import * as fs from 'fs';

export class Model {
    createMVVMModule(pathToCurrentDir: String, name: String) {
        let pathToDir = pathToCurrentDir + "/" + name;
        this.createFolder(pathToDir);

        let filesNames = [name + "View.swift", name + "ViewModel.swift", name + ".swift", name + "UI.swift"];

        filesNames.forEach((fileName) => {
            this.createFile(pathToDir, fileName);
        });

        this.setTextForSwiftFile(
            pathToDir + "/" + name + "View.swift",
            '/Users/danildubov/mvvmgenerator/src/View.txt',
            name
            );
        this.setTextForSwiftFile(
            pathToDir + "/" + name + "ViewModel.swift", 
            '/Users/danildubov/mvvmgenerator/src/ViewModel.txt',
            name
            );
        this.setTextForSwiftFile(
            pathToDir + "/" + name + ".swift", 
            '/Users/danildubov/mvvmgenerator/src/VFile.txt',
            name
            );
        this.setTextForSwiftFile(
            pathToDir + "/" + name + "UI.swift",
            '/Users/danildubov/mvvmgenerator/src/UI.txt',
            name
            );    
    }

    private createFolder(path: String) {
        if (fs.existsSync(path.toString())) return;
		fs.mkdirSync(path.toString());
    }

    private createFile(pathToDir: String, fileName: String) {
        fs.createWriteStream(pathToDir + "/" + fileName).close();
    }

    private setTextForSwiftFile(pathToWriteFile: String, pathToReadFile: String, moduleName: String) {
        const data = fs.readFileSync(pathToReadFile.toString(), {
            encoding:'utf8', flag:'r'
        });
        let newData = data.replace(/%_/gi, moduleName.toString());

        fs.writeFile(pathToWriteFile.toString(), newData, (err) => {
            if (err) throw err;
        });
    }
}