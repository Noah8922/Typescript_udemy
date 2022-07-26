## Core Types

### 1. number
- 1, 5.3, -10 
- 모든 값들이 number 타입으로 구분된다.

### 2. string
- ""(큰따옴표), ''(작은따옴표), ``(백틱) 모두 포함.
- 간단한 텍스트

### 3. Boolean
- true, false 
- 참과 거짓의 값은 자바스크립트가 if조건문에서 특정값을 확인할 때, 런타임에서 백그라운드 작동하는 데이터 타입과는 관련이 없다.

> 타입스크립트의 역할은 런타임 코드를 변경하지 않고, 컴파일을 하면서 오류까지도 컴파일을 한다. 그 과정에서 오류가 있다면 그것을 지적할 뿐 그것에 개입하지 않는다.

> 타입스크립트의 기능이 자바스크립트 엔진에 내장되어 있지 않기 땜누에 타입스크립트를 사용하면 개발 도중에만 지원 받을 수 있다. 타입스크립트의 로직은 브라우저에서 실행할 수 없다.

### 4. 왜 typescript에서는 변수 선언에 타입을 지정하지 않는가.

- 이는 타입 추론이라는 타입스크립트의 내장 기능을 활용하기 때문이다.
- 즉, 특정변수나 상수에 어떤 타입을 사용했는지를 타입스크립트는 아주 잘 이해한다는 것이다.
- 아래와 같이 number1 이란는 변수는 5라는 상수로 고정되어 있기 때문에, 단순히 숫자 타입인 것보다 더욱 구체적인 것이다.

```ts
const number1 = 5; // const number1: 5
```
- 이를 let으로 변경해도 아무것도 바뀌지 않지만, let은 불변이 아니기 때문에 최선도 최악도 아닌 상태인 것이다. 
- number1에 호버시 더이상 상수 5가 되어야 한다고 하지는 않지만 여전히 number임은 추론할 수 있다.
```ts
let number1 = 5; // let number1: number
```
- 물론, 아래와 같이 let에서 선언 한 후에 타입을 명시해 줄수 있지만, 이는 반복되는 작업이고 충분히 추론에 의해 알 수 있기 때문에 좋은 작업이 아니다.
```ts
let number1 : number = 5;
```
- 하지만 처음부터 값을 지정하지 않을 때는 타입스크립트에 타입을 먼저 알려주는 것이 좋다.
```ts
let number1 : number; // 값을 할당하지 않음.
number1 = 5;
```
- 근데 보통 이렇게 하지 않음.
- 또한 처음 초기화 값으로 타입을 추론하기 때문에 이후에 다른 타입의 데이터로 재할당하면 오류가 발생한다.
```ts
let resultPhrase = 'Result is : ' // Type String
resultPhrase = 5 // 오류 발생
```

### 4. Object
- {age : 30}
- 중괄호 안에 Key : value 형식으로 저장됨.
```ts
const person = {
    name : 'Noah',
    age : 30
}
```
- 위와 같이 객체를 선언하고 났을 때 아래와 같이 콘솔에서 보고자 한다면,
```ts
console.log(person.nickname);
```
- 오류가 나는데 그 이유는 person 안에 nickname 이라는 key가 없기 때문이다.
- person 객체에 마우스를 호버하면 아래와 같이 타입스크립트가 추론한 객체 타입을 볼 수 있다.
```ts
const person: {
    name: string;
    age: number;
}
```
 - 이는 어딘가에 생성되는 자바스크립트 객체가 아니라 타입스크립트가 추론한 객체 타입이다.
 - 그래서 person에 아래와 같이 object라는 타입을 주게 되면, 콘솔에서도 name을 불러올수 가 없다.
 ```ts
const person : object = {
    name : 'Noah',
    age : 30
}
```
- 왜냐하면 object 타입이라고 명시했지만 그 안에 name이라는 Key가 없기 때문이다. 
- 즉 여기서 타입스크립트는 어떤 정보도 주지 않는 객체가 있다고 이해하는 것이다.
- 이를 해결하기 위해서는 아래와 같이 구체적으로 지정해야 한다.
 ```ts
const person : {
    name : string;
    age : number;
} = {
    name : 'Noah',
    age : 30
}
```
- 하지만 앞서 살펴본것 처럼 타입을 명시적으로 지정하는 것은 좋은 작업 방식은 아니다.
- 최선의 방식은 아래와 같다.
```TS
const person =  {
    name : 'Noah',
    age : 30
}
```

### 5. Array
- hobbies : ['Sports','Cooking']
- 배열은 타입스크립트의 타입 추론이 얼마나 역동적인지 알려주는 좋은 예시이다.
- 예를들어, 아래와 같이 hobbies라는 key에 배열을 value로 할당했을 때,
```TS
const person =  {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking']
}
```
- for문을 통해 hobby를 가져오게 되면
```TS
for (const hobby of person.hobbies) {
    console.log(hobby);
}
```
- 콘솔에 실제로 찍히는 것을 볼 수 있다. 또한 hobby에서 아래와 같이 대문자로 만들기 위해서 UpperCase를 찍어보면 실제로 자동완성으로 찍히는 것을 볼 수 있다.
```TS
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}
```
- 이는 타입스크립트가 hobbies가 문자열의 배열타입이라고 이해하기 때문이다.
- 즉, person.hobbies를 입력하면 타입스크립트는 hobbies를 문자열의 배열이라고 인식하게 된다.
- 그렇기 때문에 문자열로 지정되는 hobby를 사용하여 문자열과 관련된 어떠한 작업이든 가능하게 해준다.
- 만약에 여기서 hobby에 map 속성을 쓰고자 하면 hobby는 문자열이기 때문에 사용할 수 없다고 알려준다.
```TS
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    console.log(hobby.map()); // 'string' 형식에 'map' 속성이 없습니다.
}
```
