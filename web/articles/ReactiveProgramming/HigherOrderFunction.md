---
title: High Order Function
description: အခြား function များ သို့မဟုတ် function တခုကို argument အနေနဲ့ လက်ခံတာပဲဖြစ်ဖြစ်၊ function တခုကို return ပြန်တာပဲဖြစ်ဖြစ် လုပ်တဲ့ function ကို higher order function လို့ခေါ်ပါတယ်။
author: Min Si Thu
type: article
cover: /images/Re/hof.png
created_time: Tue Jun 02 2020 20:59:30 GMT+0630 (Myanmar Time)
---

# Higher Order Function

အခြား function များ သို့မဟုတ် function တခုကို argument အနေနဲ့ လက်ခံတာပဲဖြစ်ဖြစ်၊ function တခုကို return ပြန်တာပဲဖြစ်ဖြစ် လုပ်တဲ့ function ကို higher order function လို့ခေါ်ပါတယ်။

အဲ့လိုမဟုတ်ပဲ value တွေနဲ့ အလုပ်လုပ်တဲ့ function ကိုတော့ first order function လို့ခေါ်ပါတယ်။ 

ကျွန်တော်တို့ log ပြတဲ့ action တခုကို n ကြိမ်လုပ်မယ်ဆိုပါစို့။ 
```js
function repeatLog(n) { 
    for (let i = 0; i < n; i++) { 
        console.log(i); 
    } 
}
```

ဒီလိုနည်းနဲ့ function ရေးလိုက်ပါတယ်။ ဒါပေမဲ့ ဒီနေရာမှာ ကျွန်တော်တို့ရဲ့ repeatLog function က အလုပ်၂ခုလုပ်လိုက်တာဖြစ်ပါတယ်။ for loop ပတ်ရတာနဲ့ console.log ပဲဖြစ်ပါတယ်။ 

တကယ်လို့ နောက်ထပ် loop တခုပတ်ပြီး လုပ်ရမယ့်အလုပ်ရှိရင် log ကလွဲပြီး ပြန်ရေးနေရမှာဖြစ်ပါတယ်။ ဒီလိုလုပ်တာဟာ Don't Repeat Yourself စည်းမျဉ်းကို ချိူးဖောက်တာပဲဖြစ်ပါတယ်။
ဒါကို ပြင်ဆင်ဖို့ loop ပတ်နေရတာကို abstract လုပ်ကြည့်မှာပဲဖြစ်ပါတယ်။
```js
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log);
```
action argument က function type ဖြစ်ပါတယ်။ ဒီအတွက်ကြောင့် repeatLog လို hard coding လုပ်စရာမလိုတော့ဘဲနဲ့ ပြန်အသုံးချလို့ရတဲ့ repeat function ရလာပါတယ်။ 

JavaScript ရဲ့ array တွေမှာပါလာတဲ့ reduce method ကို ပြန် implement လုပ်ကြည့်မယ်ဆိုရင် အောက်ပါအတိုင်းဖြစ်ပါတယ်။
```js
function reduce(array, combine, start) { 
    let current = start; 
    for (let element of array) { 
        current = combine(current, element); 
    } 
    return current;
} 

console.log(reduce([1, 2, 3, 4], (accumulator, b) => accumulator + b, 0)); // → 10
```
ဒါက higher order function တွေမှာ function ကို တခုကို argument ပေးလိုက်တဲ့အတွက် abstract level တခုအနေနဲ့ သုံးလို့ရတဲ့ပုံပါ။
function တခုကို return ပြန်ပေးလို့ဖြစ်ပေါ်လာတဲ့ closure ဆိုတာလည်း ရှိပါသေးတယ်။

## References
[Eloquent JavaScript](https://eloquentjavascript.net/05_higher_order.html)