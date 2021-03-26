### 공통점

id와 class 태그는 모두 특정 요소에 스타일을 입히기 위해 사용됩니다.

### 차이점

1\. ID

유일한 즉 하나의 요소에만 스타일을 주기 위해 사용합니다.

ID는 #{name} 을 통해서 style을 줄 수 있습니다.

2\. Class

다수의, 반복되는 요소에 스타일을 주기 위해 사용합니다.

Class는 .{name} 을 통해 style을 줄 수 있습니다.

```
<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>

    <style>
        #title {
            color: red;
        }
        .box {
            margin: 5px;
            width: 50px;
            height: 50px;
            background: gray;
            float : left;
        }
    </style>
</head>

<body>
    <h2 id="title">ID vs Class</h2>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</body>
</html>
```

[##_Image|kage@M9eKc/btq03uHhwjm/iEvmtE6cHU6Qj8brLeUoSK/img.png|alignLeft|data-filename="스크린샷 2021-03-26 오후 12.31.05.png" data-origin-width="456" data-origin-height="330" data-ke-mobilestyle="widthContent"|||_##]
