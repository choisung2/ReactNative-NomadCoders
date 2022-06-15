# ReactNative-NomadCoders

React Native는 브라우저가 없고 Bridge가 존재한다

<br>

![리액트 네이티브 작동 원리](https://user-images.githubusercontent.com/92927950/170433291-b5f97139-5fee-4236-8bc9-e0146a9e5729.png "https://nomadcoders.co/react-native-for-beginners/lobby")

event 발생 => 데이터(메시지) 생성 => Bridge를 통해 JavaScript에 메시지 전달 ⇒ 코드 실행 ⇒ 다시 Bridge를 통해 Native로 잔달

<br>

---

<br>

## Exop

<br>

- React Native 앱을 위한 프레임워크이다
- Android Studio 또는 XCode를 거치지 않고도 개발 중에 프로젝트를 실행이 가능하다

<br>

설치

<br>

```
npm i -g expo-cli
```

<br>

## 프로젝트 생성

<br>

```
expo init my-app
```

<br>

## 로그인

<br>

- 로컬과 핸드폰 둘 다 로그인 해야 한다
- 로컬로 앱이 동작하기 때문에 같은 네트워크를 사용해야 한다
- 모바일에서 app을 open하면 로컬에서 반응한다

<br>

```javascript
expo login
```

<br>

## `<Text>`

<br>

- text는 무조건 Text 컴포넌트에 들어가야 한다

<br>

```javascript
<Text>짱이다!</Text>
```

<br>

## StyleSheet

<br>

- StyleSheet.create = object(라고 생각하자)
- 자동 완성 기능
- 꼭 써야하는 것은 아니다
- 컴포넌트에 style을 넣어줘야 한다

<br>

```javascript
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>짱이다!</Text> 👈
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
  },
});
```

<br>

## Status-bar

<br>

- 시계, 배터리, wifi
- 일부 컴포넌트는 화면에 표시되지 않고, ios 및 안드로이드 운영 체제와 소통하기 위한 것
- exop-status-bar의 statusBar와 react-native statusbar의 차이점 => 거의 같지만 props, method... 의 차이가 있다
- native

![native](https://user-images.githubusercontent.com/92927950/171191124-b918d80d-c75f-4b6d-9065-6a002f879a75.png)

- expo

![expo](https://user-images.githubusercontent.com/92927950/171191150-dfc52235-193b-45a1-a892-85182572f27b.png)

<br>

## 왜 status-bar가 native에도 있고 expo에도 있나?!

react-native 3.0버전까지 asyncstorage가 존재했는데, (웹으로 따지면 localstorage 같은 개념) 현재(6.8)는 없어졌다

⇒ 개발자들에게 최대한 많은 api와 컴포넌트를 제공하려고 했으나, 기능에 버그가 많고 유지관리, 업데이트 등에 어려움을 느꼈기 때문이다

⇒ 정말 중요한, 필수적인 기능만 남기려고 노력하는 중이며, 커뮤니티 패키지를 사용하라고 한다

<br>

![image](https://user-images.githubusercontent.com/92927950/171192710-5ed30005-d9fd-4523-ba16-313a1675d34b.png)

<br>

커뮤니티 패키지를 누르면 React Native Directory로 이동하는데, third-party 패키지와 api가 있다 

- 커뮤니티가 제작한 package는 많은 옵션이 있다는 장점이 있지만, 만든 사람이 바쁘면 업데이트, 버그 등이 고쳐지는데 오랜 시간이 걸린다는 단점이 있다
- expo는 이를 우려했고, 자체적으로 packages와 apis를 만들기 시작했다 ⇒ <b>expo sdk</b>라고 부른다

<br>

## 레이아웃 시스템

### flexbox
- 웹에서는 display:flex 를 해야만 하는데, flex: 1 로 사용가능하다
- 기본적으로 flex container를 가진다
- flexdirection의 기본 값은 column 이다. row로 변경하기 위해서는 명시해야한다

<br>

```html
<View style={{ flexDirection: "row" }}>
  <View style={{ backgroundColor: "tomato" }}></View>
  <View style={{ backgroundColor: "teal" }}></View>
  <View style={{ backgroundColor: "orange" }}></View>
</View>
```

<br>

- 반응형 디자인을 생각해, 너비와 높이에 기반해 레이아웃을 만들지 않는다 => 수 많은 스크린에서 동일한 사이즈를 만들어야 하기 때문에 비율만 생각하자!
- 동일한 부모 아래 있는 자식들은 비율로 크기를 설정할 수 있다(부모 크기를 지정해야한다)

<br>

```html
<View style={{ flex: 1 }}>
  <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
  <View style={{ flex: 1, backgroundColor: "teal" }}></View>
  <View style={{ flex: 1, backgroundColor: "orange" }}></View>
</View>
```
