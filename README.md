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

---

<br>

## 프로젝트 생성

<br>

```
expo init my-app
```

<br>

---

<br>

## 로그인

<br>

- 로컬과 핸드폰 둘 다 로그인 해야 한다
- 로컬로 앱이 동작하기 때문에 같은 네트워크를 사용해야 한다
- 모바일에서 app을 open하면 로컬에서 반응한다

<br>

```javascript
expo init my-app
```

<br>

---

<br>

## `<Text>`

<br>

- text는 무조건 Text 컴포넌트에 들어가야 한다

<br>

```javascript
<Text>짱이다!</Text>
```

<br>

---

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
