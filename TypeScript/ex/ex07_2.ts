//대수 데이터 타입
//1. union 타입 => '|' 기호로 다양한 타입을 연결해서 만든 타입을 의미한다
//2. intersect 타입 => '&' 기호로 다양한 타입을 연결해서 만든 타입을 의미한다
type NumOrString = number|string;
let k:NumOrString = 10;
let z:NumOrString = "TypeScript";
//z=true; 는 안됨

type MyNumber = number; //type alias
let a11:MyNumber=10;
//2개의 객체를 하나로 결합하여 반환하는 메서드
// & : 교집합 타입. 다양한 인터페이스를 조합하여 새로운 유형을 만들 때 사용 (조합)
const mergeObj = <T,U>(x:T, y:U): T&U =>({...x, ...y})//x가 T타입을 받고

type INameable = {name:string}
type IAgeable = {age:number}

const nameAndAge : INameable&IAgeable = mergeObj({name:'홍길동'},{age:22});
console.log(nameAndAge);
console.log(nameAndAge.name);
console.log(nameAndAge.age);

interface Printable{
    print():void;
}
interface Loggable{
    log():void;
}
type PrintLogger = Printable &Loggable;

//클래스명 : MyPrintLogger
//Printable, Loggable 인터페이스를 상속받아 에러 없도록 조치하기
class MyPrintLogger implements Printable, Loggable {
    print():void{
        console.log('Print');
    }
    log():void{
        console.log('Logging');
        
    }
}

let obj1 : MyPrintLogger = new MyPrintLogger();
obj1.print();
obj1.log();

//부모 타입 선언 = 자식 객체를 생성
let obj2:Printable = new MyPrintLogger();
obj2.print();
// obj2.log(); 이는 에러난다

(<MyPrintLogger>obj2).log();//타입 단언을 하여 접근

let obj3:Loggable = new MyPrintLogger();
obj3.log();
(obj3 as MyPrintLogger).print();
console.log('------------------');
const obj4:PrintLogger = new MyPrintLogger();
obj4.print();
obj4.log();

//Union (|) 이용해서 타입 구분하기
//인터페이스 3개 (ISquare-정사각형, IRectangle-직사각형, ICircle-원)
interface ISquare{
    size:number;
}
interface IRectangle{
    width:number;
    height:number;
}
interface ICircle{
    radius:number;
}
//인터페이스 타입의 객체 생성
const sq:ISquare = {size:10}
const rt:IRectangle = {width:10, height:15}
const cr:ICircle = {radius:10}

type IShape = ISquare|IRectangle|ICircle;
//getArea()함수에 객체들은 인수로 전달하면 면적을 구해서 반환 
const getArea = (args:IShape)=>{
    return 0;
}
//위 함수는 어떤 타입의 객체인지 구분해야 면적을 구할 수 있다.
//-> 타입스크립트는 합집합 타입의 각각을 구분할 수 있는
//식별 합집합이라는 구문을 제공한다 -> ex07_3.ts, ex07_4.ts 참고