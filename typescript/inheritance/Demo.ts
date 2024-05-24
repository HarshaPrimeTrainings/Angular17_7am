import { MyClass } from "./Parent";

class Demo{

  constructor(temp:MyClass){
    console.log('Hell Iam Construtor ');
  }


}
let m = new MyClass();
let d = new Demo(m);


