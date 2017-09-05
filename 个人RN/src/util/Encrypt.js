/**
 * Created by lichao on 17/6/18.
 */
  let Encrypt={
   hx_sign : "d128a8baa18d069e9d7fe379d85b29ba77dcfad2",
   z:'DXHTARQOWL',
   hexString : '0123456789abcdef',

  bin2hex :function ( original) {

    var chars=original.split('');
    var bytes=[];
    for(var i=0;i<chars.length;i++){
      bytes[i]=chars[i].charCodeAt();
    }
    var s=[];
    for(var i=0;i<bytes.length;i++){
      s[i]=this.hexString.charAt((bytes[i] & 0xf0) >> 4)+this.hexString.charAt((bytes[i] & 0x0f) >> 0);
    }
    return s.join("");
  },

  replaceStr :function  (end){
    var x="";
    var charArray = end.split('');
    for (var i=0;i<end.length;i++){
      var parseInt = charArray[i];
      x=x+this.z.charAt(parseInt);
    }
    return x;
  },

   encrypt:function ( original) {
  var bin2hex = this.bin2hex(original);
  var end="";
  for(var i=0;i<bin2hex.length;i++ ){
    var chars = bin2hex.split('');
    var s;
    if(chars[i].charCodeAt()-43<10){
      s="0"+(chars[i].charCodeAt()-43);
    }else{
      s=chars[i].charCodeAt()-43+"";
    }
    console.log(s)
    var t= s.split('')[1]+""+s.split('')[0]+"";
    end=end+t;
  }
  return  this.replaceStr(end);
},


   de_encrypt :function ( str ){
  var x="";
  var y="";
  var l="";
  for (var i=0;i<str.length();i++){
    x=x+ this.z.indexOf(str.split('')[i]);
    if(x.length()==2){
      var chars = x.split();
      y=chars[1]+""+chars[0];
      var b=y.charCodeAt()+43;
      l=l+b;
      x="";
    }
  }
  return this.hextoString(l);
},


   hextoString :function ( bytes)
{
  var baos=new ByteArrayOutputStream(bytes.length()/2);
  for(var i=0;i<bytes.length;i+=2)
    baos.write((this.hexString.indexOf(bytes.charAt(i))<<4 |this.hexString.indexOf(bytes.charAt(i+1))));
  return new String(baos.toByteArray());
}
}
export {Encrypt as default}