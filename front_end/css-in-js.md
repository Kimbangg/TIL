## **탄생  👶🏻**

기존의 CSS 파일은 .css 파일에 작성하여 사용하죠.

그렇기 때문에, 프로젝트의 규모가 커지면 이를 관리하기가 매우 어려워 졌는데 이를  해결 하기 위해 CSS를 JS 파일 내부에 배치하는 개념인 CSS-in-JS가 탄생 하였습니다

대표적인 라이브러리는 "Styled-Component" 가 있습니다.

## **Inline  vs  Css-in-Js  🥊**

인라인과 Css-in-Js 모두  코드 내부에 작성한다는 공통점이 있습니다. 하지만, 그 둘은 약간의 차이를 보입니다.

아래의 코드는 Inline이 css를 적용 시키는 방법입니다.

```
const styles = {
  backgroundColor: 'palevioletred',
  color: 'papayawhip',
};

<button style={styles} />
```

```
<button style="background-color: palevioletred; color: papayawhip;" />
```

다음 코드는 CSS-in-JS가 적용 시키는 방법입니다.

```
import styled from 'styled-components';

const Text = styled.div`
  color: white,
  background: black
`

<Text>Hello CSS-in-JS</Text>
```

```
<style>
.hash136s21 {
  background-color: black;
  color: white;
}
</style>

<p class="hash136s21">Hello CSS-in-JS</p>
```

차이를 찾으셨나요? CSS-in-JS는 <style> 태그를 추가했고, 인라인은 DOM 노드에 속성을 추가했습니다.

스타일 태그를 추가하는 경우, 실제 CSS를 생성 한 것이기에 CSS를  사용하는 것과 똑같은 원리로 작동 됩니다. 즉, CSS 가 가진 힘을 온전히 누릴 수 있다는 점이죠.

반면, Inline의 경우 CSS의 subset 이기 때문에 지원 불가능한 기능이 존재합니다.

## **CSS-In-JS 작동 원리  ⚙️**

JS 파일 내에 있는 CSS는 다음과 같은 작동 방식을 통해 적용을 합니다.

반환을 하는 함수는 아래와 같은 기능을 수행합니다.

1\. selector를 인자로 받고 이에 대한 함수를 반환한다.

2\. 반환되는 함수는 주어진 css 내용을 파싱하여 selector에 동적으로 반영한다.

함수가 끝날 때는, 스타일이 적용된 selector(=ele)을 반환 합니다 :D

```
function styledTag(selector) {
  const styledEl = document.querySelector(selector);

  return function (cssText) {
    const cssStyles = cssText.toString().split(";");
    const cssKeyValues = cssStyles.map((style) => style.split(":"));
    cssKeyValues.forEach(([key, value]) => {
      if (key && value) {
        styledEl.style[key.trim()] = value.trim();
      }
    });
    return styledEl;
  };
}
```

## **CSS-in-JS 의  장점  🤟🏻**

찾아 볼 수 있었던 장점은 아래 4가지 정도가 있었습니다.

1.   중복을 피하기 위한, 별도의 명명 규칙이 필요하지 않다

2.   CSS가 컴포넌트 단위로 추상화되기 때문에,  CSS 파일(모듈)간에 의존성을 신경 쓰지 않아도 된다.

3.  컴포넌트와 CSS가 동일한 구조로 관리되므로 수정 및 삭제가 용이하다.

4\. CSS 코드를 JS에 작성하므로 컴포넌트의 상태에 따른 동적 코딩이 가능하다.

제가 실제로 하면서 느꼈던 장점이라고 한다면,

1\. 특정 스타일을 가진 <tag> 네임 을 커스터마이징 함으로써, 가독성이 좋아진다.

2\. 한 파일에 묶여 있기 때문에, 목적에 대한 이해 및 관리가 용이하다.

정도가 있는 것 같습니다.

## **그렇다면 CSS-in-JS는 무조건 좋은 것인가?  🙋🏻‍♂️**

정답은 당연히 "그렇지 않다" 입니다.

1\. 번들 크기의 증가.

CSS 같은 경우는 브라우저가 이를 해석하고, 반영하면 되는 반면에 Styled-Component를 사용하면 별도의 라이브러리를 설치 해야합니다. 라이브러리를 설치 한다는 것은 즉, 번들의 크기가 늘어난다는 것인데 "CSR" 이라는 방식을 사용하는 입장에서 최초 로딩 시간을 지연 시킨다는 단점으로 드러 날 수 있죠.

그렇다면 SSR을 쓰면 해결이 될까? 라는 생각이 들기도 하지만, 실제 페이지가 이동할 때마다 내려 받아야 하는 문제가 발생 하기 때문에 성능적인 불이익이 발생합니다.

즉, 개발자의 입장에서는 사용하기 편할 수도 있지만,  고객의 입장에서는 불편함을 가져다 줄 수 있습니다. 역시 모든 기술은 "trade-off"
