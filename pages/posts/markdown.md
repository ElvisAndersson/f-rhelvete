---
title: Javscript high order functions
date: 2023/09/19
description: View examples of high order functions
tag: web development
author: You
---

<Image
  src="/images/photo8.jpg"
  alt="Photo"
  width={1125}
  height={750}
  priority
  className="next-image"
/>

 .map()
 

Function .map() is a manipulative function that can modify each element’s content in an array that it is called on. This function returns a new array with modified values, the array that it is called on will stay still. This function is useful for adding a little change to an already existing array, for example adding a property to an object or modifying it. Its construction and use are identical to the previous function .forEach() and both can be used interchangeably.

Just like the function .forEach(), this function also takes only 1 parameter .map(callback). The parameter callback can take up to 3 parameters element, index & array (but only the element parameter is required, the rest is optional).