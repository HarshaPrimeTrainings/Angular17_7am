import { MyClass } from "./Parent";

class Demo extends MyClass{

    childmethod(){
        console.log(this.username);
        console.log(this.addr);
    }
 

}

let d = new Demo();
d.childmethod();

