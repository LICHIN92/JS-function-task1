// //square of a number
let a=Number(prompt('Enter a Number to See Square Number'));
document.getElementsByClassName('hi')[0].innerHTML='Number You Entered='+a;
squrt(a)
console.log(s);
document.getElementById('hh').innerHTML='Square='+s;
// document.getElementsById('square').style.color="blue";

let l=Number(prompt('Enter Length of Rectangle'));

document.getElementsByTagName('h2')[2].innerHTML='Length of Rectangle (l)='+l; 
let w=Number(prompt('Enter Width of Rectangle'))
document.getElementsByTagName('h2')[3].innerHTML='Width of Rectangle (w)='+w;
area(l,w);
document.getElementsByTagName('h2')[4].innerHTML='Area of Rectangle (l*w)='+rectangle;


//reversing number
 revnumber();

//  checking a string is palindrome or not
let word=prompt('Enter a Word to Check for Palindrome or Not');
document.getElementsByClassName('pali')[0].innerHTML='String You Entered='+word;
 palindrome(word)

// minutes to second conversion
let minute=parseInt(prompt('Enter Minute to Convert to Second'));
console.log(typeof minute);
document.getElementsByClassName('minute')[0].innerHTML='Minutes='+minute;
mintosec(minute);
document.getElementsByClassName('minute')[1].innerHTML=+minute+'Minute='+sec+'Sec';

function squrt(a){
    s=a*a;
    console.log('square='+s)
    return s;
    
}

function area(l,w){
    rectangle=l*w
    return rectangle;
}

function revnumber(){
    
    let num=Number(prompt("Enter The Number With More Than One Digit To reverse"));
         if(num<10){
            alert('You Enterd Single Digit Number');
            alert("We Can't Reverse This Number "+num);
            revnumber();
                       
         }
           if(num>=0){
            document.getElementsByClassName("rrev")[0].innerHTML="The Number You Entered="+num;
            let x=0,rev=0;
            while(num!=0){
               rev=rev*10;
               modulus=num%10;
               console.log('modulus='+modulus)
               rev=rev+modulus;
               x=num%10;
               num=num-x;
               console.log('rev'+rev)
               num=num/10;
                
            }
            document.getElementsByClassName('rrev')[1].innerHTML='Reversed Number='+rev;
          }
}
function palindrome(word) {
       let size=word.length;
       console.log(word)
       console.log('size='+length)
       console.log('second letter of string='+word[2]);
       size=size-1;
       console.log('lenght='+length);
       let i=0;
          while(i<size){
            if(word[i]!=word[size-i]){
                    console.log("this is not palimdrome");
                    document.getElementsByClassName('pali')[1].innerHTML='The String '+word+' is  Not a Palindrome';
                    break;
                }
            else{
               i++;
            }
            document.getElementsByClassName('pali')[1].innerHTML='The String '+word+' is a Palindrome';

          }
          console.log('the string you entered is palindrome');
         
}
function mintosec(minutes){
    sec=60*minutes;
    console.log(minutes);
    return sec;
}