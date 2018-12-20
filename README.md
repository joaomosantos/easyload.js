EasyLoad.js
================

easyload.js is a lightweight and simple plugin based on jQuery. [Try out the demo](//joaomosantos.github.io/easyload.js).

Supports IE7+ and modern browsers and Support jQuery version >= 1.7.x.

#### Package Manager

```sh
# Bower
bower install --save easyload-js
```

### Usage

```javascript
$('.easy-load').easyload();
```

### Settings

Name             | Default      | Type    | Description
:----------------|:-------------|:--------|:-----------
toCharge         | `img`        | string  | Tag `img` or class `.my-class` that will load when being displayed on the screen.      
fullCharge       | `loaded`     | string  | The `loaded` class will be assigned to the element already loaded.
dataAttribute    | `src`        | string  | The data attribute `data-src` gets path of image.

### Sample Structure

For a simple image load, use the following structure:

```html
<div class="easy-load">
 <img src="" data-src="image_path">
</div>
```
To change the default settings, for example:

```js
  $('.easy-load').easyload({
    toCharge: '.my_class',
    fullCharge: 'ok',
    dataAttribute: 'url'
  });
```