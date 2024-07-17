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

hoặc

npm i
gulp
```

### container

```
container  : 1200px
```

> [!TIP]
> Bấm vào ▶▷ ở đầu dòng để hiển thị chi tiết

<details>
<summary>font-family</summary>
xem thêm ở /assets/scss/mixins/fonts/_font-family.scss
```css
.class-name {
    @extend %ff-name[noto, roboto, poppins, ...];
}
```
</details>

<details>
<summary>font-size</summary>
xem thêm ở /assets/scss/mixins/fonts/_font-size.scss
```css
.class-name {
    @extend %fz-number[custom];
}
```
</details>

<details>
<summary>font-weight</summary>
xem thêm ở /assets/scss/mixins/fonts/_font-weight.scss
```css
.class-name {
    @extend %fw-number[100...900];
}
```
</details>

<details>
<summary>letter-spacing</summary>
xem thêm ở /assets/scss/mixins/_letter-spacing.scss
```css
.class-name {
    @extend %lts-number[-100, 0, 100];
}
```
</details>

<details>
<summary>text</summary>
xem thêm ở /assets/scss/mixins/_text.scss
```css
.class-name {
    @extend %txt-direction[left-center-right];
    @extend %txt-palt;
}
```
</details>

<details>
<summary>Animate</summary>
xem thêm ở /assets/scss/foundation/_f_animate.scss
```html
<div class="js_ani fadeup">
    <!-- code here -->
</div>
<div class="js_ani fadeleft">
    <!-- code here -->
</div>
<div class="js_ani fadedown">
    <!-- code here -->
</div>
<div class="js_ani faderight">
    <!-- code here -->
</div>
<div class="js_ani scaleup">
    <!-- code here -->
</div>
<div class="js_ani scaledown">
    <!-- code here -->
</div>
<div class="js_ani after_slidebar">
    <div class="after_slidebar_inside">
        <!-- code here -->
    </div>
</div>
<figure class="js_ani after_slidebar">
    <img class="after_slidebar_inside" src="" alt="">
</figure>
```
</details>
