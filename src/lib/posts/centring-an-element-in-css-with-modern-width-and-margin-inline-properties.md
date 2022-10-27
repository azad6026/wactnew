---
layout: posts
title: Centring an element in CSS - with modern width and margin-inline properties
date: 2022-10-20T07:13:39.802Z
coverImage: /images/notes-down.jpg
excerpt: This is a modern way to centre an element in CSS
---
This is a tip I learnt from [Kevin Powe](https://www.youtube.com/watch?v=SGlpOnIgk1w) which is totally cool.

We all have done this to centre an element using max-width and margin with a padding inside the element:

```css
.element{
  max-width: 200px;
  padding: 10px;
  margin: 0 auto;
}
```

B﻿ut there is modern way to do this using similar properties but a different approach.

Instead of `max-width` and `padding`, we can use the `min` function for the `width` property. The trick is we deduct the padding from the minimum width (100%) , which gives same padding as above to the element. And we give the maximum width as the second parameter of the `min` function:

```css
.element{
  width: min(100% - 10px, 200px);
}
```

T﻿he above one liner is equal to the first two lines of the initial code. Now to make the element centred, we will use [margin-inline](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline) property.

T﻿his property defines both the logical inline start and end margins of an element and if set to auto, will give the same margin to both sides of the element so it will get centred:

```css
.element{
  width: min(100% - 10px, 200px);
  margin-inline: auto;
}
```

T﻿hat is it. Hope it helps.
