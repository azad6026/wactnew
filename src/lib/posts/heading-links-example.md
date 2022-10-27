---
title: How to use clip path in SVG to mask a shape to an image
date: 2022-10-15T02:01:00.170Z
coverImage: /images/tips.jpg
excerpt: Check out how to mask an image with a custom shape
coverWidth: 16
updated: 2021-11-01
categories:
  - sveltekit
  - markdown
coverHeight: 9
---
This tip is about how we can mask or clip an image with a custom shape in SVG.Lets say you have this SVG code:  

```html
<svg width="394" height="375" viewBox="0 0 394 375" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M219.147 0.295465C167.049 -1.97378 117.873 8.85038 77.7024 32.0047C50.0392 47.9291 31.0998 101.094 17.3267 128.111C-4.78308 171.515 -4.72262 208.938 11.7777 255.756C36.159 324.958 92.9722 371.908 160.92 374.852C180.303 375.695 200.581 372.947 221.276 366.124C266.325 351.287 327.914 339.67 349.363 298.338C366.956 264.445 395.278 175.271 393.955 136.271C392.83 103.181 331.782 68.5596 305.479 35.6711C287.547 13.2524 273.051 21.9084 254.175 10.4435C243.418 3.92447 231.594 0.819813 219.214 0.282951" fill="red"/>
</svg>
```

T﻿he trick here is that the `path` is making the shape. What we need is to embed our image inside the SVG and use clip path to do the trick and masks the image with the desired shape:

```html
<svg width="200" height="176" viewbox="0 0 200 176" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs>
		<clipPath id="shape">
			<path d="M219.147 0.295465C167.049 -1.97378 117.873 8.85038 77.7024 32.0047C50.0392 47.9291 31.0998 101.094 17.3267 128.111C-4.78308 171.515 -4.72262 208.938 11.7777 255.756C36.159 324.958 92.9722 371.908 160.92 374.852C180.303 375.695 200.581 372.947 221.276 366.124C266.325 351.287 327.914 339.67 349.363 298.338C366.956 264.445 395.278 175.271 393.955 136.271C392.83 103.181 331.782 68.5596 305.479 35.6711C287.547 13.2524 273.051 21.9084 254.175 10.4435C243.418 3.92447 231.594 0.819813 219.214 0.282951" fill="currentColor"/>
		</clipPath>
	</defs>
	<image width="200" height="200" clip-path="url(#shape)" xlink:href="image url"></image>
</svg>
```

A﻿s you can see we store the `clipPath` inside the <a  href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs" target="_blank">`defs`</a> element so it will not be rendered on its own. And we put the path inside the clipPath with an `id` that we can refer to from the `image` element.
T﻿hat is it. Any shape provided within the path, will mask the image accordingly.
