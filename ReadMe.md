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

### 6. Tuple
- [1,2]
- 자바스크립트에는 없음.
- 배열과 같다고 생각할 수 있지만, 길이와 타입이 고정된 배열의 형태를 가지고 있다.
- 예를 들어 아래와 같이 한 사람이 하나의 role만을 가질수 있고, 그 role안에는 두 개의 요소로만 구성된다면,
```TS
const person =  {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : [2, 'author']
}
```
- 첫번째 요소는 항상 숫자 식별자여야 하며, 두번째 요소는 항상 문자 식별자이어야 한다.
- 중요한건, 타입스크립트는 이를 이러한 값이 포함된 배열이어야 한다고 이해한다는 것이다.
- Tuple 단점은 저렇게 두가지 요소로 배열이 고정되어 있어야 함에도 불구하고 push가 가능하다는 점과
- 두번째 요소는 string이 되어야 함에도 숫자로 변경이 가능하다는 점이다.
```TS
person.role.push('admin')
person.role[1] = 10
```
- 하게 되면, role에는 세번째 요소로 'admin'이 추가되고, 두번쨰 자리에는 10이 들어오게 된다.
- role의 구조가 어떻게 되어야 하는지는 타입스크립트는 모르지만 우리만 알고 있다. 
- 즉 2가지 요소중에 첫번쨰 요소는 숫자 타입, 두번째 요소는 문자 타입이어야 한다는 것을 알고 있다.
> 이런 경우에 Tuple이 적당하다. role의 타입을 명시적으로 설정함으로써 타입스크립트에게 알려줄 수 있는 것이다. 아래와 같이 하면 role이 튜플임을 알 수 있다.
```TS
const person : {
    name : string;
    age : number;
    hobbies : string[];
    role : [number, string]
} =  {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : [2, 'author']
}
```
- 튜플의 기능은 무엇인가
- 튜플은 타입스크립트에게 이 코드는 두개의 요소만 있는 특수 배열임을 말해준다. 
- 그래서 위에서 했던 것 처럼 할 경우
```TS
person.role.push('admin')
person.role[1] = 10 // 타입오류가 남.
```
- 두번쨰 줄만 오류가 나게 된다. 왜냐하면 두번쨰 자리는 문자열로 고정을 해두었기 때문이다.
- 그렇다면 왜 push는 가능한걸까?
- push 예외적으로 Tuple에서 허용되고 안타깝게도 타입스크립트가 잡지 못하는 에러이다. 
- 또한 길이에 대한 지원 기능을 사용할 수 있는데
- 아래와 같이 person.role의 값을 빈배열로 설정하면 허용되지 않지만, 정의한 구조와 일치하게 되면 허용되고, 넘어가게 되면 에러가 발생하게 된다.
```TS
person.role = [] // 새값으로 설정하면 허용되지 않는다.
person.role = [0,'adimin'] // 이건 가능
person.role = [0,'admin','User'] // 이것도 불가능, 요소가 너무 많다.
```
- 즉 배열에 정확히 X개의 값이 필요하고 각 값의 타입을 미리 알고 있는 상황에서는 배열보다는 튜플을 사용하여 작업중인 데이터 타입과 예상되는 데이터 타입을 명확하게 파악할수 있음.

### 7. Enum
- enum {a, b}
- 열거 목록
- 마지막에는 열거된 목록들은 0부터 시작하는 숫자로 변환된다.
- 예를 들어 작업자 별로 코드를 부여한다고 하자.
- 허가자는 0번, 열람가능자는 1번, 작가는 2번이라고 지정하고 이를 코드에서 사용하기 위해서는 아래와 같이 전역변수로 선언해야 한다.
```TS
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : ADMIN
}
```
- 이와 똑같은 작업을 Enum을 통해 해결할 수 있다.
- enum을 지정할 때는 각 키워드를 대문자로 설정해야 한다.
```TS
enum Role {ADMIN, READ_ONLY, AUTHOR} // 0,1,2

const person = {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : Role.ADMIN
}
```
- 위와 같이 enum으로 각 키워드를 설정하게 되면 자동으로 각각의 키워드에 번호가 0번부터 부여되고 그 다음 부터는 1씩 늘어난다.
- 물론 처음 시작 번호를 본인 임의로 변경할수도 있고 
```TS
enum Role {ADMIN = 5, READ_ONLY, AUTHOR} // 5,6,7

const person = {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : Role.ADMIN
}
```
- 각 키워드에 각기 다른 번호를 부여할 수도 있다.
```TS
enum Role {ADMIN = 100, READ_ONLY = 200, AUTHOR = 300} 

const person = {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : Role.ADMIN
}
```
- string을 부여할 수도 있다.
```TS
enum Role {ADMIN = 'ADMIN', READ_ONLY =200, AUTHOR = 300}

const person = {
    name : 'Noah',
    age : 30,
    hobbies : ['Sports','Cooking'],
    role : Role.ADMIN
}
```

### 8. Any
- 가장 유연한 타입으로 어떤 타입의 데이터도 저장 가능하다.
- 하지만, Any는 바닐라 자바스크립트를 사용하는 것과 다를 바가 없기 때문에 타입스크립트의 장점을 전혀 이용할수가 없다.
- 타입을 Any로 지정하는 순간, 타입스크립트는 검사할 부분이 없기 때문에 컴파일러가 작동하지 않는다.
- 따라서, 어떤 값이나 종류의 데이터가 어디에 저장될지 전혀 알 수 없는 경우이거나
- 런타임 도중, 특정 값에 수행하고자 하는 작업의 범위를 좁히기 위해서 any가 아닌 경우에는
```TS
if ( typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect Error')
}
- 사용하지 않는 것이 좋다.