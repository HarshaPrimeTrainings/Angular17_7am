class MyClass{

    username:string = 'user1';
    userid:number=1;
    isactive:boolean=true;

    display(){
        console.log('Hello Iam Method');
    }

}

let mc = new MyClass();

console.log(mc.username + ":: "+ mc.userid + " :: "+ mc.isactive);
mc.display();