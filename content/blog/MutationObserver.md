+++
date = "2017-07-16T17:38:44+10:00"
draft = true
title = "Mutation Observer in Production"

+++
Have you ever wanted to find out if a div has been resized
by some inline style change? This could be something you never
come across but if you are required to work with ad tech
and specifically implementing ad tech into you website and then
getting it to play nice with what you want to do then Mutation Observer
might be what you have been looking for.

## What does it do?

Mutation Observer allows us to watch the DOM and then
react to changes. So as an example we could watch a DIV
and then when the size of that DIV changes we could react
to that change by doing something else. 

## My use in Production

I used it in production when I wanted to add some text
around a video ad to say "Advertisement" and then remove
this text once the ad had been killed. The ad did all it's
changes inline so my only option was to use mutation observer
to watch for a change and then react.

## The Code

So in the below example I want to watch the DIV and when
the size of the DIV is updated I want to show another wrapper
div that I have created:


