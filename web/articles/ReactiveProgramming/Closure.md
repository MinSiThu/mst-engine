---
title: Closure
description: Closure ဆိုတာ inner function က outer function ရဲ့ scopeထဲမှာ ရှိနေသမျှ variable function တွေကို ရယူသုံးစွဲနိုင်တဲ့အခြေအနေကို ဆိုလိုခြင်းဖြစ်ပါတယ်။
author: Min Si Thu
type: article
cover: /images/Re/Closure.jpg
created_time: Wed Jun 03 2020 15:33:33 GMT+0630 (Myanmar Time)
---

# Closure

Closure ဆိုတာ inner function က outer function ရဲ့ scopeထဲမှာ ရှိနေသမျှ variable function တွေကို ရယူသုံးစွဲနိုင်တဲ့အခြေအနေကို ဆိုလိုခြင်းဖြစ်ပါတယ်။ ဘယ်အခြေအနေထိလဲဆိုရင် outer function က inner function ကို return value အနေနဲ့ ပြန်ထုတ်ပေးသည့်တိုင်အောင် outer function ရဲ့ scope ကို သုံးစွဲနိုင်တုန်းပဲဖြစ်ပါတယ်။
![Closure](/images/Re/Closure.jpg)

```js
function outer(){
    let state = 0;
    return function inner(){
        return state+=1;
    }
}

let inner1 = outer();
let inner2 = outer();

console.log("inner1 "+inner1());
console.log("inner2 "+inner2());
console.log("inner2 "+inner2());
console.log("inner2 "+inner2());
```
ဒီနေရာမှာတော့ closure အသုံး၀င်ပုံကို module pattern အနေနဲ့မပြချင်ပါဘူး။

Functional ဖြစ်တဲ့အတွက် tap function နဲ့ memoize function ကိုဖော်ပြချင်ပါတယ်။

tap function ကတော့ value တခုကို input ယူပြီး outerscope ထဲသိမ်းထားပါတယ်။ နောက်ထပ် function တခုကို input ယူပြီး အဲ့ function ထဲကို input ထည့်ပြီး ‌သုံးပေးတာပါ။
```js
let tap = (value)=>fn=>(typeof fn == 'function' && fn(value));

tap("hello")(function(value){
console.log("in function "+value);
})
```
memoize function ကတော့ သူ့ထဲကိုထည့်ထားတဲ့ function ရဲ့ result တွေကို သိမ်းထားပေးတဲ့ higher order function တခုပဲဖြစ်တယ်။
```js
function memoize(fn) {
    let table = {};
    return arg => table[arg] || (table[arg] = fn(arg));
}

function factorial(number) {
    if (number == 0) {
    return 1;
    }
    return number * factorial(number - 1);
}

let fastFactorial = memoize(number => {
    if (number == 0) {
        return 1;
    }
    return number * fastFactorial(number - 1);
});

console.log(factorial(4));
console.log(fastFactorial(4));
console.log(fastFactorial(8));
```
number တခုရဲ့ factorial ကိုရှာတဲ့အခါ recursive ပုံစံနဲ့ရှာဖြစ်ကြပါတယ်။ ဒီအခါမှာ ရှာပြီးသား value တွေရဲ့ result ကိုပြန်ရှာနေရတဲ့အတွက် မလိုအပ်ပဲ အလုပ်လုပ်နေရသလိုဖြစ်ပါတယ်။ ဒါ့ကြောင့် memoize function ကိုသွားထားတဲ့အတွက် ရှာပြီးသား factorial တန်ဖိုးတွေကိုသိမ်းထားပေးတာပဲဖြစ်ပါတယ်။
