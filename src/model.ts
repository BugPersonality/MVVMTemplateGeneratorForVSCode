import * as fs from 'fs';
import * as vscode from 'vscode';
import axios from 'axios';
import { html } from 'cheerio';

"use strict";

export class Model {

    text: string = "";

    createMVVMModule(pathToCurrentDir: String, name: String) {
        let pathToDir = pathToCurrentDir + "/" + name;
        this.createFolder(pathToDir);

        let filesNames = [name + "View.swift", name + "ViewModel.swift", name + ".swift", name + "UI.swift"];

        let urls = [
            'https://danil.s-ul.eu/ihkZzUn2', // ViewModel
            'https://danil.s-ul.eu/IZdgTNrP', // View
            'https://danil.s-ul.eu/9LYlupnJ', // VFile
            'https://danil.s-ul.eu/pAw8hEXA'  // UI
        ]

        filesNames.forEach((fileName) => {
            this.createFile(pathToDir, fileName);
        }); 

        this.setTextForSwiftFile(
            pathToDir + "/" + name + "ViewModel.swift", 
            urls[0],
            name
            );
        
        this.setTextForSwiftFile(
            pathToDir + "/" + name + "View.swift",
            urls[1],
            name
            );
        
        this.setTextForSwiftFile(
            pathToDir + "/" + name + ".swift", 
            urls[2],
            name
            );
        
        this.setTextForSwiftFile(
            pathToDir + "/" + name + "UI.swift",
            urls[3],
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

    private setTextForSwiftFile(pathToWriteFile: String, url: any, moduleName: String) {
        const AxiosInstance = axios.create(); 

        AxiosInstance.get(url)
        .then( 
            response => {
            const html = response.data; 
            const data_ = String(html).toString();

            let newData = data_.replace(/%_/gi, moduleName.toString());

            fs.writeFile(pathToWriteFile.toString(), newData, (err) => {
                if (err) throw err;
            });
            }
        )
        .catch(console.error); 
    }
}