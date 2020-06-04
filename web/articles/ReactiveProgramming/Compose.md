---
title: Functional Composition
description: Compose function ဆိုတာ function ၂ခု သို့ ၂ခုထက်ပိုတာတွေကို ပေါင်းပြီးတော့ function အသစ်တခုကို return ထုတ်ပေးတာပါ 
author: Min Si Thu
type: article
cover: /images/Re/compose.jpeg
created_time: Thu Jun 04 2020 18:14:09 GMT+0630 (Myanmar Time)
---

# Functional Composition
Compose function ဆိုတာ function ၂ခု သို့ ၂ခုထက်ပိုတာတွေကို ပေါင်းပြီးတော့ function အသစ်တခုကို return ထုတ်ပေးတာပါ 
```js
const compose = (a, b) =>
(c) => a(b(c))
```

compose function က a နဲ့ b ဆိုတဲ့ function ၂ခုကို လက်ခံပြီးတော့ c value ကိုထည့်ပြီး execute လုပ်နိုင်တဲ့ function တခုကို return ပြန်ပေးပါတယ်။ ဒီနေရာမှာ b ကိုအရင် execute လုပ်ပြီးမှ a ကို အလုပ်လုပ်ပါတယ်။ 
ဆိုလိုချင်တာကတော့ compose function မှာ ထည့်ထားတဲ့ function argument တွေကို ညာဘက်ကနေ ဘယ်ဘက်တလျှောက်ပဲ အလုပ်လုပ်ရပါတယ်။
ဒါဟာ ဘာလဲဆိုတော့ ကျွန်တော်တို့ ၁၀တန်းတုန်းက သင်္ချာရဲ့ composite function ပါပဲ။ 
```cs 
( g ∘ f )(x) = g(f(x))
``` 
မှာအရင်ဆုံး ညာဘက်က f ကို စရှင်းရတာမျိုးပါ။

အပေါ်မှာ ကျွန်တော်တို့ရေးခဲ့တဲ့ compose function က argument ၂ခုပဲထည့်လို့ရပါတယ်။ တကယ်လို့ argument အများကြီးနဲ့ function ကိုသုံးချင်ရင်တော့ အောက်ပါ code ကပိုကောင်းပါတယ်။
```js
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
```
ဒီနေရာမှာ reduceRight ကိုသုံးရတာကတော့ ညာဘက်ကနေ စပြီးထည့်ထားတဲ့ function ကနေ အလုပ်လုပ်ဖို့ပါ။ v ကတော့ accumulate လုပ်ထားတဲ့ value ပဲဖြစ်ပါတယ်။

ဒီလိုရေးရတာ ဘာအကျိုးထူးလဲဆိုရင် single responsibility principle ကိုလိုက်နာနိုင်တာပဲဖြစ်ပါတယ်။ function တခုကို အလုပ်တခုပဲလုပ်မှာဖြစ်ပါတယ်။ ဒါ့ကြောင့် function တခုချင်းစီက reusable လုပ်ရတာလွယ်ပါတယ်။ ပြီးတော့ testing လုပ်တဲ့အခါ ပိုလွယ်ကူပြီး ရိုးရှင်းလာပါတယ်။ function တခုချင်းစီကို အလုပ်တခုအတွက်ပဲ test လုပ်ရတာမှာကို fail ဖြစ်သွားရင်တောင် ပြန် implement လုပ်ရတာ တအားလွယ်ပါတယ်။