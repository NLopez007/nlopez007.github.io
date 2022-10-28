try {
  "use strict"
  //var text = new TextDecoder().decode(Uint8Array.from(atob('Input'), c => c.charCodeAt(0)));
  var text = 
`! = 13 test 
lorem = 4 test 
meta:vp = 0 test 
Xxxxxxx = 0 test
rs = 11 repeated space
sw = 9 or 10 space width
tw = 10 text with
ix = 11 index
ar = 11 array
cv = 10 current value
pv = 10 previous value`;
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  ctx.font = "San Francisco";
  var w = (s) => ctx.measureText(s).width;

  text = text.split('\n');
  //space = " ";
  space = "&nbsp;"
  var br = "<br>";

  text = text.reduce((pv, cv, ix, ar) => {
    let end =
      cv.indexOf("=") == -1 ? 0 : cv.indexOf("=") - 1;
    cv = w(ar[ix].slice(0, end));
    var largest = (Math.max(pv, cv));
    if (ix == ar.length - 1) {
      return ar.map((line, ind) => {
        let end = line.indexOf("=") == -1 ? 0 : line.indexOf("=") - 1;
        sw = w(" ");
        tw = w(line.slice(0, end));
        rs = ((largest - tw) / sw) || 0;
        rs = Math.ceil(rs);
        dif = largest - tw;
        // testing code
        //write(dif+space+largest+br);
        //if(dif>0)rs--;
        //if(dif>0&&dif<0)rs--;
        return (space.repeat(parseInt(rs)) + line + space + rs + space);
      });
    } else {
      return largest
    }
  }, []).join("<br>");

  write(`${text}`);

  function write(txt) { document.write(txt); }
} catch (e) { document.write(e); }