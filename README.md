# <a href="https://github.com/rhildred/tstest" target="_blank">tstest</a>

## ... typescript starter project

To run this:

1. install git <a href="https://git-scm.com/downloads" target="_blank">from here.</a>
1. install vscode <a href="https://code.visualstudio.com/download" target="_blank">from here.</a>
1. install node.js <a href="https://nodejs.org/en/download/" target="_blank">from here.</a>
1. `npm install -g typescript`
1. `npm install -g ts-node`
1. `npm install` to get the local dependencies for this project.

This is meant to be used to show the 3 basic coding primitives.

... Introduction to control structures with typescript. 

The foundational programming control structures are selection, iteration and sequence:

![oracle programming](http://docs.oracle.com/cd/A87860_01/doc/appdev.817/a77069/03_strua.gif "oracle programming")

This looks at these control structures as they are implemented in javascript.

##Sequence

```
  console.log("Hello World!");
  console.log("<br />");
  console.log(" so there!");

```

The general idea is that when the computer performs a sequence it does one thing after another.

##Iteration

Someone in class nailed it when they said that iteration will happen forever until an ending condition is met. In honour of my love of marshmallow filled cookies, I present the following example message to my wife, who buys groceries.

```

let x: number  = 0;
while(x < 100){
  console.log("I love Vivas! Please buy some.");
  x = x + 1;
}

```

Of course this is much faster than me typing this over and over.

##Selection

```

let score: number = 75;
if(score > 55){
  console.log("You Passed");
}else{
  console.log("You failed");
}

```

This is mildly interesting, but to change the message that appears, you need to edit the code.  What we really need to do  is code it once, then anyone can figure out their passing or failing status.

##Selection with user input

To capture user input we need to import a node javascript module. 

```

import readlineSync = require('readline-sync');


```

This module is retrieved by node package manager (npm) using the following `package.json` snippet:

```

  "dependencies": {
    "@types/readline-sync": "^1.4.3",
    "readline-sync": "^1.4.9"
  }


```

We get our user input with this code:

```

let score: number = Number(readlineSync.question('What was your score on the test? '));

```

With these simple constructs we can code just about anything. Next objects.