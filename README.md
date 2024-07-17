### mặc định

```
font-family: "Noto Sans JP", san-serif;
color: #000;
font-weight: 400;
line-height: 1.6
```

### run scss

```
cd assets
sass --watch scss:css
```

hoặc

```
npm i
gulp
```

### container

```
.container  = 1200px
```

> [!TIP]
> Bấm vào ▶ ở đầu dòng để hiển thị chi tiết 🤣

### font-family

```
xem thêm ở "assets/scss/mixins/fonts/_font-family.scss"

@extend %ff-font-family-name;

.example {
    @extend %ff-inter;
    @extend %ff-noto-sans;
}
```

##### font size

```
xem thêm ở "assets/scss/mixins/fonts/_font-size.scss"

font-size: @extend %fz-số

.example {
    @extend %fz-10;
}
```
