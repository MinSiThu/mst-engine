---
title: Introduction to Reactive Programming
description: ပထမဆုံးအနေနဲ့ Reactive Programming ဆိုတာ ဘာလဲ ကျွန်တော်မရှင်းပြသေးပါဘူး။ Kefir.js (ကတ်ဖာ) ကိုအရင်ဆုံး စသုံးပြပါမယ်။ 
author: Min Si Thu
type: article
cover: /images/Re/Reactive%20Programming.jpg
created_time: Mon Jun 01 2020 10:51:58 GMT+0630 (Myanmar Time)
---

# Introduction to Reactive Programming
ပထမဆုံးအနေနဲ့ Reactive Programming ဆိုတာ ဘာလဲ ကျွန်တော်မရှင်းပြသေးပါဘူး။ Kefir.js (ကတ်ဖာ) ကိုအရင်ဆုံး စသုံးပြပါမယ်။ 

>Kefir.js က reactive programming library တခုပါ။ Bacon.js နဲ့ RX.js ပုံစံကိုယူထားပြီးတော့ performance ပိုကောင်းတဲ့အပြင် memory usage ကိုလည်း ပိုသက်သာအောင် လုပ်ထားတာဖြစ်ပါတယ်။ 
(**Kefir documentation**)

ကျွန်တော်က ဘာလို့ kefir သုံးရလဲဆိုတော့ သူ့ရဲ့ api က rx နဲ့ bacon ထက်ပိုရိုးရှင်းလို့ပါ။ နောက်တချက်က github မှာရှိတဲ့ rating ကောင်းလို့ပါ။
ပထမဆုံး kefir ကို unpkg ကနေ install လုပ်လိုက်ပါမယ်။ 
```js
<script src="https://unpkg.com/kefir@3.8.7/dist/kefir.min.js"></script>
```
အခု kefir ရဲ့ later method ကိုသုံးပြီးတော့ stream တခုတည်ဆောက်လိုက်ပါမယ်။
```js
let stream = Kefir.later(1000, 1); 
stream.log()
```
later method ရဲ့ ပထမ parameter က millisecond ဖြစ်ပါတယ်။ ဒုတိယ parameter ကတော့ value ဖြစ်ပါတယ်။ သူ့ရဲ့ အဓိပ္ပါယ်ကတော့ ပထမ argument အဖြစ်ထည့်ပေးတဲ့ millisecond ကြာပြီးတဲ့နောက် ဒုတိယ argument ဖြစ်တဲ့ value ကိုထုတ်ပေးဖို့ပါ။
ဒီတော့ stream ကနေ ၁စက္ကန့်ကြာတဲ့အခါ 1 ဆိုတဲ့ value ကိုထုတ်ပေးမှာပဲဖြစ်ပါတယ်။
နောက်တခုကြည့်ရအောင်။
```js
let stream2 = Kefir.interval(1000, 1); 
stream2.log();
```
interval method ကတော့ အချိန်တခုကြာတိုင်း value ထုတ်ပေးမှာဖြစ်ပါတယ်။ အခုဆိုရင် stream2 ဟာ 1 ကို တစက္ကန့်တခါထုတ်ပေးနေမှာပဲဖြစ်ပါတယ်။

အဲ့ value တွေထွက်နေတာကို ဘာဆက်လုပ်ကြမလဲ။
တခုခုအသုံးချလို့ရသင့်တယ်မဟုတ်လား။ ဒီတော့ ကျွန်တော်တို့ stream2 က ၁စက္ကန့်နေတိုင်းထွက်နေတဲ့ 1တွေကို 2 ဖြစ်အောင်ပြောင်းကြမယ်။ 
```js
let toDouble = stream2.map(value=>value*2);
```
toDouble stream ကို stream2 ရဲ့ map method ကနေဖန်တီးလိုက်ပါတယ်။ toDouble stream ဟာ ပထမ stream2 ကထုတ်လွတ်နေသမျှ value တွေကို 2 ဆတိုးပြီး value အသစ်တွေထုတ်ပေးနေတာဖြစ်ပါတယ်။

ဒါဆို toDouble stream ကထွက်လာတဲ့ value တွေကို ဘယ်နေရာမှာသုံးကြမလဲ။ ဒီလိုလုပ်ဖို့အတွက် toDouble stream ကထွက်လာတဲ့ value တွေကို ဖမ်းယူရပါတော့မယ်။ ဒါကို subscribe လုပ်တာလို့ ခေါ်ပါတယ်။ kefir မှာတော့ onValue method ကိုသုံးလို့ရပါတယ်။ 
```js
toDouble.onValue(x => { console.log(x); });
```
onValue ထဲကိုထည့်တဲ့ function ထဲမှာ ကြိုက်တဲ့ side effects သုံးလို့ရပါတယ်။ အဓိကကတော့ DOM handling လုပ်ကြပါတယ်။

ဒါဆိုရင် သူ့ရဲ့သဘောတရားကို နည်းနည်းလေးမြင်လာပြီထင်ပါတယ်။ ပထမဆုံး stream က ထုတ်လွှတ်လိုက်တဲ့ value တွေက stream တခုပြီး တခုဖြတ်လာပါတယ်။ နောက်ဆုံးထွက်လာတဲ့ အမျိုးမျိုးပြင်ထားတဲ့ value ကပဲ subscribe လုပ်ထားတဲ့ နေရာဆီကိုရောက်လာပါတယ်။
ဒီနေရာမှာ ကျွန်တော်တို့ asynchronous အလုပ်လုပ်ခဲ့တာပဲဖြစ်ပါတယ်။ interval ကနေ value ထုတ်မှသာ အလုပ်လုပ်ခဲ့ကြတာဖြစ်ပါတယ်။ ဒါ့ကြောင့်မို့ Reactive Programming ဆိုရင် Asynchronous Stream တွေနဲ့ပဲ အလုပ်လုပ်တာလို့ ဆိုလိုရခြင်းဖြစ်ပါတယ်။

![Reactive Programming](/images/Re/Reactive%20Programming.jpg)

terminology အချို့သိထားသင့်ပါတယ်။ ပထမဆုံးဖန်တီးထားတဲ့ stream ကို observable လို့ခေါ်ပါတယ်။ ဒုတိယ stream ဖြစ်တဲ့ toDouble ကို ဖန်တီးဖို့ map function ကို သုံးရပါတယ်။ ဒီ map function ကို operator လို့ခေါ်ပါတယ်။ operator တွေအများကြီးရှိပါတယ်။ 

## References

[https://kefirjs.github.io/kefir/](https://kefirjs.github.io/kefir/)
[Reactive Programming](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
[https://www.learnrxjs.io/learn-rxjs/concepts/](https://www.learnrxjs.io/learn-rxjs/concepts/)