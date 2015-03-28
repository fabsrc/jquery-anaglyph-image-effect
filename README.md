## jQuery Anaglyph Image Effect Plugin

Transforms your images into anaglyph-looking images.

### Example

![Anaglyph Image Example](img/exmplmg-nglph.jpg)
*Original Image by [Unsplash](https://unsplash.com)*

### Usage

```js
$('img').anaglyphImage();
```

### Options

* **Intensity:** the extent of the anglyph shift
* **Quality:** quality of the base64 encoded image data

```js
$('img').anaglyphImage({
	intensity: 10,
	quality: 0.9	
});
```
### License

[The MIT License (MIT)](http://opensource.org/licenses/mit-license.php)
