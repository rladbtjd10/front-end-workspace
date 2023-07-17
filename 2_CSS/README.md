### 목차

-[선택자](#선택자)
-
-[색상 및 배경 스타일](#색상-및-배경-스타일)

## CSS(Cascading Style Sheet)

- 웹 페이지의 표현(디자인)을 나타내는 언어
- 특정 요소를 선택해서 원하는 "스타일"과 "기능"을 적용시킬 수 있음

```css
selector(선택자) {
    property(속성): value(값);
}
```
## 스타일 적용 방법

### 내부 방식

1. 인라인 방식

```html
<tag style="property:value;">
```

2. 내부 스타일
```html
<style>
    selector {
        property: value;
    }
</style>
```

### 외부 방식

3. 링크 방식

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>   
```
```css
selector {
    property: value;
}
```

## 선택자

1. 전체 선택자 : *

- HTML 문서 안의 모든 요소애 적용

2. 태그 선택자

- html 태그에 직접 효과 적용
- 해당 태그 작성 시 자동으로 효과 적용

3. 클래스 선택자

- 중복 가능
- .name {}
- <태그 class="name">

4. 아이디 선택자

- 중복 불가
- #name{}
- <태그 id="name">

5. 그룹 선택자

- A, B, C {}

6. 자손 선택자

- A B {}

7. 자식 선택자

- A > B {}

8. 속성 선택자

- 선택자[속성=속성값] : 일치
- 선택자[속성*=속성값] or 선택자[속성~=속성값] : 포함
- 선택자[속성^=속성값] or 선택자[속성|=속성값] : 시작
- 선택자[속성$=속성값] : 끝

9. 형제 선택자

- A + B : A 요소 뒤에 있는 B 요소 "하나만" 선택
- A ~ B : A 요소 뒤에 "모든" B 요소 선택

10. 구조 선택자
- 웹 문서 구조를 기준으로 특정 위치에 잇는 요소를 찾아 선택할 때 사용
- 선택자:first-child : 첫 번째 요소
- 선택자:first-of-type : 첫 번째 요소
- 선택자:last-child : 마지막 요소
- 선택자:last-of-type : 마지막 요소
- 선택자:nth-child(n) : 앞에서부터 n번째 요소
- 선택자:nth-of-type(n) : 앞에서부터 n번째 요소
- 선택자:nth-last-child(n) : 뒤에서부터 n번째 요소
- 선택자:nth-last-of-type(n) : 뒤에서부터 n번째 요소

<br>

# 색상 및 배경 스타일

[위로 이동](#목차)

## 색상 표현 방법

### 색상 이름 표기법

- 영문으로 색상 이름을 표시하는 방법
- 모든 브라우저에서 표현할 수 있는 색상을 웹 안전 색상(Web Safe Colors)
- 216가지

### 16진수 표기법 --가장 많이 사용

- #기호 다음에 6자리 16진수로 표시하는 방법
- 6자리는 앞에서부터 두 자리씩 묶어서 Red, Green, Blue로 표시
- #000000(검은색) ~ #ffffff(흰색)

### rgb/rgba 표기법

- rgb 표기법은 16진수 표기법과 다르게 10진수로 Red, Green, Blue를 표시
- rgba 표기법은 rgb에 불투명도 값을 추가로 지정 (0은 완전 투명, 1은 완전 불투명)

```css
rgb(red(0~255), green(0~255), blue(0~255));
rgba(red(0~255), green(0~255), blue(0~255), alpha(0~1));
```

### hsl/hsla 표기법 --이런게 있구나 하고 넘어가도 됨

- hsl 표기법은 앞에서부터 색상(Hue), 채도(Saturation), 밝기(Brightness)를 표시
- hsla 표기법은 hsl에 불투명도 값을 추가로 지정 (0은 완전 투명, 1은 완전 불투명)
- 색상(Hue)은 색상환으로 표시 (0, 360 빨간색, 120 초록색, 240 파란색)
- 채도는 %로 표시 (0% 회색톤, 100% 순색)
- 밝기는 %로 표시 (0%는 가장 어둡고, 100%는 가장 밝다.)

```css
hsl(Hue(0~360), Saturation(0~100%), Brightness(0~100%));
hsla(Hue(0~360), Saturation(0~100%), Brightness(0~100%), alpha(0~1));
```

## background-color

- 배경색을 지정하는 속성

```css
선택자 {
    background-color: 색상;
}
```

## background-clip

- 배경색의 범위를 지정하는 속성

```css
선택자 {
    background-clip : border-box or padding-box or content-box;
}
```

- border-box : 테두리(border)까지 적용 (기본값)
- padding-box : 테두리를 뺀 패딩(padding) 범위까지 적용
- content-box : 내용(content) 부분에만 적용

## background-image

- 배경에 이미지를 설정하는 속성

```css
선택자 {
    background-image: url('이미지주소');
}
```

## background-repeat

- 배경 이미지 반복 여부를 지정하는 속성
```css
선택자 {
    background-repeat: repeat or repeat-x or repeat-y or no-repeat;
}
```
- repeat : 배경 이미지가 가득 찰 때까지 가로와 세로로 반복 (기본값)
- repeat-x : 배경 이미지를 가로로 반복
- repeat-y : 배경 이미지를 세로로 반복
- **no-repeat** : 배경 이미지를 한 번만 출력하고 반복하지 않는다.

## background-size

- 배경 이미지 크기를 조절하는 속성

```css
선택자 {
    background-size: auto or contain or cover or 크기 or 백분율;
}
```

- auto : 원래 배경 이미지 크기만큼 표시 (기본값)
- contain : 요소 안에 배경 이미지가 들어가도록 확대/축소
- **cover** : 요소를 배경 이미지가 모두 덮을 때까지 확대
- 크기 : 너비와 높이 값을 지정
- 백분율 : 요소의 크기를 기준으로 너비와 높이의 백분율 값을 지정

## background-position

- 배경 이미지가 표시되는 위치를 조정하는 속성

```css
선택자 {
    : 수평위피 수직위치;
}
```
- 수평 위치 : left, center, right, 크기값(px), 백분율로 표시
- 수직 위치 : top, center, bottom, 크기값(px), 백분율로 표시

## background-origin

- 배경 이미지를 배치할 때 기준을 지정하는 속성

```css
선택자 {
    background-origin: border-box or padding-box or content-box
}
```

- border-box : 테두리(border)가 기준
- padding-box : 테두리를 뺀 패딩(padding)이 기준 (기본값)
- content-box : 내용(content)이 기준

## background-attachment

- 웹 페이지가 위아래로 움직여도 배경 이미지는 움직이지 않고 고정하는 속성
```css
선택자 {
    background-attachment: scroll or fixed;
}
```

- scroll : 화면 스크롤과 함께 배경 이미지도 스크롤 (기본값)
- **fixed** : 화면이 스크롤 되더라도 배경 이미지는 고정

## background

- 배경 스타일 속성을 한 번에 지정할 수 있는 속성

```css
선택자 {
    background: image repeat attachment position clip origin size;
}
```

# 레이아웃 스타일

## 박스 모델(Box Model)
- 모든 요소들은 사각형 박스로 표현 되는데 스타일 시트에서는 박스 형태인 요소를 박스 모델이라고 한다.
- CSS를 사용하면 박스 모델 요소의 크기, 위치, 속성을 변경할 수 있다.
- 박스 모델은 콘텐츠(Content) 영역과 테두리와 콘텐츠 영역 사이의 여백인 패딩(Padding), 박스 모델 사이의 여백인 마진(Margin)으로 구성된다.

## width, height

- 박스 모델에서 콘텐츠 영역의 크기를 지정할 때 사용
- width : 너비 지정
- height : 높이 지정

```css
선택자 {
    width: 크기 or 백분율 or auto;
    height: 크기 or 백분율 or auto;
}
```

- 크기(px)나 백분율(%)로 지정
- auto : 박스 모델의 너비와 높이 값이 콘텐츠에 따라 자동 결정 (기본값)

## display

- 블록 레벨 요소를 인라인 레벨 요소로 변경하거나 인라인 레벨 요소를 블록 레벨 요소로 변경할 수 있는 속성

```css
선택자 {
    display: none or block or inline or inline-block or ...;
}
```

- none : 요소가 화면에서 표현되지 않고 공간도 차지하지 않는다.
- block : 요소를 블록 레벨 요소로 변경
- inline : 요소를 인라인 레벨 요소로 변경
- inline-block : 요소를 인라인 레벨로 배치하면서 내용에는 블록 레벨 속성을 지정
- inline 요소는 margin, padding, height, width가 제대로 설정되지 않는다.

## padding, margin

- padding은 테두리와 콘텐츠 영역 사이의 여백
- margin은 요소와 요소 사이의 여백

```css
선택자 {
    padding[-위치] : 크기 or 백분율 or auto;
    margin[-위치] : 크기 or 백분율 or auto;
}
```
- 위치 : top, right, left, bottom으로 지정
- 크기(px)나 백분율(%)로 지정
- auto : 콘텐츠에 따라 자동으로 결정 (기본값)

## border-style

- 테두리 스타일을 지정하는 속성

```css
선택자 {
    border-style: none or ..... or solid;
}
```
- none : 테두리가 나타나지 않는다. (기본값)
- dashed : 테두리를 짧은 선으로 표시
- dotted : 테두리를 점선으로 표시
- double : 테두리를 이중선으로 표신
- **solid** : 테두리를 실선으로 표시

## border-width

- 테두리의 두께를 지정하는 속성

```css
선택자 {
    border[-위치]-width : 크기 or thick or medium or thin;
}
```

## border-color

- 테두리의 색상을 지정하는 속성

```css
선택자 {
    border[-위치]-color: 색상;
}
```

## border

- 테두리의 두께, 스타일, 색상을 한 번에 지정하는 속성

```css
선택자 {
    border: 두께 스타일 색상;
}
```

## border-radius

- 테두리의 모서리를 둥글게 지정하는 속성
- 테두리 모서리의 두 방향과 반지름 값을 사용해서 표기

```css
선택자 {
    border[-위치-위치]-radius: 크기 or 백분율;
}
```

## 표지셔닝

- CSS를 이용해서 여러 요소를 원하는 위치에 적절하게 배치하는 것

## box-sizing

- 요소의 너비와 높이의 기준을 지정하는 속성

```css
선택자 {
    box-sizing: content-box or border-box;
}
```
- content-box : 요소의 너비와 높이를 콘텐츠를 기준으로 지정 (기본값)
- border-box : 요소의 너비와 높이를 테두리를 기준으로 지정

## float, clear

- float 속성은 요소의 위치를 왼쪽이나 오른쪽으로 배치하는 속성

```css
선택자 {
    float : left or right or none;
}
```

- left : 요소를 왼쪽에 배치
- right : 요소를 오른쪽에 배치
- none : 요소를 어느 쪽으로도 배치하지 않는다.

* float 속성을 사용해 요소를 배치하면 다음 요소에 영향을 미치는데 이를 초기화시키는 속성이 clear 속성

```css
선택자 {
    clear: left or right or none or both;
}
```

## position

- 웹 문서 안에서 요소들을 자유롭게 배치하는 속성

```css
선택자 {
    position: static or relative or absolute or fixed;
}
```

- static : 문서의 흐름에 맞추어 요소를 배치한다. (기본값)
- **relative** : 이전 요소에 연결해 배치하면서 위치를 지정하여 요소를 배치
- **absolute** : 원하는 위치를 지정하여 요소를 배치 
- **fixed** : 지정한 위치에 고정하여 요소를 배치
- 속성값이 static을 제외한 나머지들은 좌표를 이용해서 요소의 위치를 조절할 수 있다.
- 위치는 top, bottom, left, right로 지정할 수 있다.

## visibility

- 요소를 화면에 보이거나 보이지 않게 하는 속성

```css
선택자 {
    visibility: visible or hidden or collapse;
}
```

- visible : 요소를 표시 (기본값)
- **hidden** : 요소를 감춘다. 단, 크기는 유지하기 때문에 공간은 차지한다.
- collapse : 표의 행, 열, 행 그룹 등에서 지정하면 서로 겹치도록 지정한다. 그 외의 영역에서 사용하면 hidden처럼 처리된다.

## z-index

- 요소 위에 요소를 쌓을 때 쌓는 순서를 지정하는 속성
- 요소에 z-index 값이 클수록 위에 쌓인다.
- 무조건 맨 위에 표시해야 하는 경우 큰 값으로 지정하기도 한다.

```css
선택자 {
    z-index: 값;
}
```