export const truncate = (text, length, suffix) => {
  return text?.substring(0, length) + suffix;
};

export const strippedContent = string => {
  return string?.replace(/<\/?[^>]+>/gi, ' ');
};

export const getEmbedVid = url => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return `https://www.youtube.com/embed/${
    match && match[2].length === 11 ? match[2] : null
  }`;
};

/**
 *
 * @param {*} obj query object
 * @returns iline string of key=value
 */
export const serialize = obj => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

/**
 * convert
 */
export const toArabicDigits = function (str = '') {
  var id = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

/**remove some special expressions fro string**/
export const removeSpChar = function (str = '') {
  return str.replace(/[\/\\#,+()":*?؟<>{}@!^&=_`]/g, '');
};
