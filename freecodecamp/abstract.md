# Introduction

- We can change the value of an variable only to the same type. It is a reason to explicit.

```json
let name: string = "Barry"
```

- In functions, we type the return after the parameters brackets

```json

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname
}

```

# Interfaces

- TypeScript understands our objects by default, but we have a problem when when try to use the same variables in other objects 
- Help us to describe entities 
- By default, all properties inside interface are mandatory 
- We xan use classes to interface 

```json 

interface UserInterface {
    name: string 
    age?: number // age turns optional 
    getMessage()
}

const user: UserInterface = {
    name: "Barry",
    age: 30,
    getMessage() {
        return "Hello" + name
    },
}

const user2: UserInterface = {
    name: "Jack",
    getMessage() {
        return "Hello" + name
    },
}

```

# Types and unions

- Union combine data types 

```json

type ID = string
type PopularTag = string 
type MaybePopularTag = string  | null

interface UserInterface {
    id: ID
    name: string 
    surname: string
}

const popularTags: PopularTag[] = ["dragon", "coffe"]

const dragonsTag: MaybePopularTag = "dragon"

let usename: string = "Barry"

let pageNumber: string | number = "1"

let errorMessage: string | null = null

let user: UsertInterface | null = null 

```

# Void / Any / Never / Unknown

- When we do not return anything it is void 
- Void is a set of undefined and null 

```json

const doSomething = (): void => {
    console.log("doSomething)
}

```

- Any type turns off TypeScript checks 
- It is necessary try to not use any 

- Function with never can't be executed to the end

```json

const doSomething = (): never => {
    console.log("doSomething)
}

```

- Unknown can not turn another type, but can be converted with as

```json

let vAny: any = 10
let vUnknown: unknown = 10

let s1: string = vAny // It works
let s2: string = Vunknown as string // Works

let pageNumber: string = "1"
let numericPageNumber: number = (pageNumber as unknown) as number

```

# DOM

- TypeScript does know about markup

```json

const someElement = document.querySelector(".foo") as HTMLInputElement

someElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement
})

```

# Creating classes

- Everything is public by default 
- Private means that we can use it only inside a class 
- Protected 

```json

class User {
    private public firstName: string 
    private lastName: string
    readonly unchangebleName: string  
    static readonly maxAge = 50

    constructor(firstName:string, lastNane: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangebleName = firstName
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName
    }

    class Admin extends User {
        private editor: string 
        setEditor(editor: string): void {
            this.editor = editor
        }
        getEditor(): string{
            this.edit = editor
        }
    }
}

const user = new User("Monster", "lessons")

const admin = new Admin("Foo", "Bar")

```

# Generic interfaces and functions

