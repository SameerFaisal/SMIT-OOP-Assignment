class AutoMobile{
    name;
    model;
    color;
    type;

    constructor(name,color,model,type){
this.name=name;
this.color=color;
this.model=model;
this.type=type;
console.log(`Car name: ${name}, Car color: ${color}, Car model: ${model}, Car transmission type: ${type}`);
    }
    doorOpen(){
console.log(`${this.name} doors are open`);
    }
    doorClosed(){
        console.log(`${this.name} doors are closed`);
    }
}

class Car extends AutoMobile{
    constructor(name,color,model,type,doors,maxSpeed){
        super(name,color,model,type);
        this.doors=doors;
        this.maxSpeed=maxSpeed;
        console.log(`${name} has ${doors} doors`);
        console.log(`Max speed of ${name} is ${maxSpeed}`);
    }

}
class Truck extends AutoMobile{
    constructor(name,color,model,type,doors,maxSpeed){
        super(name,color,model,type);
        this.doors=doors;
        this.maxSpeed=maxSpeed;
        console.log(`${name} has ${doors} doors`);
        console.log(`Max speed of ${name} is ${maxSpeed}`);

    }

}
const car1=new Car("Mehran","Gray",1980,"manual",2,800);
car1.doorOpen();
const car2=new Car("Corolla","Black",2020,"automatic",4,1600);
car2.doorClosed();