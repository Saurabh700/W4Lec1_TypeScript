### steps

1. npm init -y
2. npm install typescript -g
3. check if typescript is installed or not `tsc -v` --> here tsc is typescript compiler
4. Package.json < scripts < "build" : "tsc --watch"
5. src < index.ts
6. copy tsconfig.json -> it tells typescript how to work -> it tells that we need to convert typescript code to es6 or es3 or es5

### Compilation Vs transpilation

##### Compilation :

    there is not any fixed defination for high level and low level lang--> if just an assumption that if it is human readable then it means it is high level else low level --> but depending on person for like for me C++ is not readable

    Machine level lang -> haskell, cobol , Assemblly language

    converts high level languages (js, python and all human readable languages ) into low level languages( ie Binary language or Byte codes )

-- Source code (High level language) --> Compiler --> Low level languages

##### Transpilation :

    It converts high level language into another high level language
    Generated code is mostly human readable
    Transpiled code can go through another compilation step --> ex -> jsx is converted into html and js and then it is compiled to low level language

##### Interpretation

    Interpretation means executing code line by line it means JavaScript is an interpreted language.
    but it is not the case --> because in browser all variables are declared first because of hoisting --> so it depends where that language is been executed

    Thats why depending on where the js is running it can be both compiled and interpreted

##### Statically typed language and Dynamically typed language

###### Dynamically typed

        - the compiler has no idea about the "types" at the compile time
        - let name; --> typeOf(name) --> undefined
        - Js, python, Ruby etc
        - Generally slower -> because everytime it need to find out the type of all var which consumes extra time
        - Generally less safe

###### Statically typed language

        - the compiler knows about the "types" at the compile time
        - C, C++, Rust, Java, Python (it is both Dynamically and statically typed lang), typeScript
        - int x --> even if dont assign any value then too it will know that it is going to be a number
        - generally faster than dynamically typed language

#### TypeScript

    - Statically Typed language
    - Superset of javaScript
    - TypeScript code -> Transpiled -> JavaScript
    - Best part is that typeScript gives us any TypeError before even running the code
