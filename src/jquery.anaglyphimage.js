/**
 *	jQuery Anaglyph Image Effect
 */

(function($) {

  $.fn.anaglyphImage = function(options) {
    var settings = $.extend({
      intensity: 10,
      quality: 0.9
    }, options);

    var getAnaglyphImageDataURL = function($img) {
      var width = $img.width(),
          height = $img.height();

      var canvas = ($('<canvas/>').attr('width', width).attr('height', height))[0],
          context = canvas.getContext('2d');

      context.drawImage($img[0], 0, 0, width, height);
      var imagedata = context.getImageData(0, 0, width, height);

      for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
          imagedata.data[4 * y * width + x * 4 + 1] = imagedata.data[4 * y * width + (x + settings.intensity) * 4 + 1];
          imagedata.data[4 * y * width + x * 4 + 2] = imagedata.data[4 * y * width + (x + settings.intensity) * 4 + 2];
        }
      };

      context.putImageData(imagedata, settings.intensity, 0);

      return canvas.toDataURL('image/jpeg', settings.quality);;
    }

    if (this.is('img')) {

      this.each(function(i) {
        var $img = $(this);
        var dataURL = getAnaglyphImageDataURL($img);
        $img.attr('src', dataURL);
        return $img;
      });

    } else {

      return false;

    }
  }

}(jQuery));
