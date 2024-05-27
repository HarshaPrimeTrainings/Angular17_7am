export class MyClass{
   
   
    public username:string = 'demosuer';
    protected addr:string = 'HYD';
    private pin:number = 123;

    static contact:string = '123456789';

    private display(){
        console.log('username :: ' + this.username);
        console.log(this.addr);
        console.log(this.pin);
    }

    public some(){
        this.display();
    }

}
console.log(MyClass.contact);

