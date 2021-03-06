# [BMI Project Site](https://piotrekzie.github.io/BMI-project-site/)

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![BMI Main Screen](./screenshot.jpeg) ![BMI Calc](./screenshot1.jpeg) ![Result](./screenshot2.jpeg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

This project was one of the most difficult I have ever experienced. Mainly because of Javascript (this was my first Javascript project), I still have to learn a lot about Javascript, but I’ll make it :) I’m glad I managed to master HTML and CSS so well that I focused most attention on JS instead of getting annoyed with the whole project.

```css
// If both input is valid, calculate the bmi
    else {
        // Hide Card One
        var main=document.getElementById('one');
        main.style.display='none';

        //Hide Card Two
        var calculator=document.getElementById('two');
        calculator.style.display='none';

        // Display Card Three
        var calculator=document.getElementById('three');
        calculator.style.display='flex';

        // Fixing upto 1 decimal places
        let bmi = (weight / ((height * height) / 10000)).toFixed(1);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Your BMI</br> Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
            `Your BMI</br> Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Your BMI</br> Over Weight : <span>${bmi}</span>`;
    }
```

### Continued development

In the future, I will definitely focus on practicing Javascript and understanding this language. I want to learn more RWD and HTML sematization to make everything compliant.

### Useful resources

- [Aligning Items in a Flex Container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) - As I mentioned earlier on MDN you can very quickly find out about any element you are interested in when creating a page.
- [CSS @media Rule](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) - This is an amazing article that helped me finally understand media query. I recommend it to anyone who is still learning this concept.
- [Breakpoint Rules](https://dev.to/sobhandash/media-queries-and-breakpoints-2022-4gkm)
- [Image Hover Overlay](https://www.w3schools.com/howto/howto_css_image_overlay.asp)
- [Stackoverflow](https://stackoverflow.com/)

## Author

- Website - [PiotrekZie](https://piotrekzie.github.io/zielonsky-web/)
- LinkedIn - [/in/piotr-zielinskii](https://www.linkedin.com/in/piotr-zielinskii/)
