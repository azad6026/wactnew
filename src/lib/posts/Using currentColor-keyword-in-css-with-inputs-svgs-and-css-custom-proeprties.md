---
layout: posts
title: Using currentColor keyword in CSS with inputs, SVGs and CSS custom proeprties
date: 2022-10-25T19:45:38.972Z
coverImage: /images/currentColor-css-keyword.jpg
excerpt: We will learn about currentColor keyword
---
Y﻿ou might have seen the `currentColor` keyword in SVG files as `fill="currentColor" ` :`path element.`

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g color="yellow">
    <rect width="50" height="50" fill="currentcolor" />
  </g>
</svg>

```

The currentcolor keyword represents the value of an element's color property.  so in the SVG example, if you change the `color` , the `path` element will also uses the same color for `fill` attribute.

B﻿ased on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) If `currentcolor` is used as the value of the `color` property, it instead takes its value from the inherited value of the `color` property.

T﻿his means we can use CSS custom properties for color and accordingly `currentColor `will take the changed value. 

I﻿t can work for other HTML elements as well. Most importantly the input elements:

```html
<input type="text" name="name" id="name" />
```

S﻿o we can use `currentColor` for input element properties:

```css
input{
  color: brown;
  border: 1px solid currentColor;
}
input:focus{
  box-shadow: 0 0 2px currentColor;
}
```

T﻿he input will have a border of brown color and on focus , it will get a box-shadow of brown as well. 

T﻿he cool thing is we can define the color property as a custom property and then as it updates, the currentColor will update accordingly:

```css
:root{
  --inputColor: brown;
}
input{
  color: var(--inputColor);
  border: 1px solid currentColor;
}
input:focus{
  --inputColor : blue;
  box-shadow: 0 0 2px currentColor;
}
```

I﻿n above example, we change the inputColor variable, on focus and  box-shadow property will take the new value (blue) as its currentColor. \
\
H﻿ope you enjoyed these tips. Happy coding.
