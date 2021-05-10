# MVVM Generator for VSCode

## What kind of files the template will generate?
>This template generates all files that you need to create a new MVVM module. All generated code is Swift 4.2 compatible. 

| File Name | Acts As | Description |
| :---         |     :---      |          :--- |
| `YourFileNameUI.swift`   | UIView     | This is where your design layout should be.  |
| `YourFileNameView.swift`    | View       | If you use Storyboard, Link this to it and delete UI file.   |
| `YourFileNameViewModel.swift`    | ViewModel | This is what will communicate with the Datasource & View.      |
| `YourFileName.swift`    | Model     | This is where to write your Model.    |

## How it works?
Open your VSCode project, press the key combination cmd+shift+p, enter the name of your module

## What is MVVM?
MVVM is not a framework but an approach to iOS application architecture, which stands for:

#### View
>The view consists of views and view controllers. It is responsible to receive user interactions and pass them to presenters for decision making. To keep the view simple, it shouldn’t contain any view logics. This is where to define how the view looks like, and nothing beyond this.

#### View Model
>The ViewModel defines the view logics, e.g. when to show a warning message or highlight a button. It is responsible to prepare content for the view to display. Whenever data is required, the view model requests data from the DataSource or the Model.

#### Model
>A Model is responsible for exposing data in a way that is easily consumable.

## Why MVVM?
After using MVVM, I've found it to be very beneficial in many ways. Let’s get back to the list of things we set out to accomplish when architecting our app to see if MVVM addresses them.

- Single responsibility principles applied.
- Easy to iterate on.
- Collaboration friendly.
- Separated out concerns.
- Spec-ability.
- Testability. 

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

## References
- [iOS Architecture Patterns](https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52#.ba7q8dcih)
- [Some of the code and information for the implementation of this project were borrowed from here](https://github.com/Kaakati/MVVM-Template-Generator)
