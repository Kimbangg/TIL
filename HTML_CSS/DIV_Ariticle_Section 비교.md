# [HTML & CSS ] <Section> vs <div> vs <Article>

### <div>

아무런 의미없이 콘텐츠의 영역을 구분 할 때 사용이 된다.

```
<div>
	<a href=#1/>
	<a href=#2/>
	<a href=#3/>
</div>
```

### <article>

페이지 내에서 독립적인 기능을 수행한다.

해당 부분을 떼어서 다른 곳에 두어도 본 기능을 올바르게 수행 할 수 있을 때 article을 사용해준다.

예시) 배너 / 위젯 etc.

### <Section>

body 내부에는 1개 이상의 section이 있어야한다.

section은 독립체로 있지 않고, 하나의 팀과 같은 역할을 수행한다.

내용에는 Heading ( = <h> ) 가 포함 되어야 한다.

```
<section>
    <h2>Title</h2>
    <img src=""/>
    <p>this is a paragraph>
</section>
```
