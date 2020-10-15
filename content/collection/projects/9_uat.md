---
title: Bugherd / Teamwork UAT tool
date: "2020-09-26"
description: "Building a tool to auto import Bugherd bugs to Teamwork Tasks for A/B testing"
images: ['portfolio/uat.jpg']
thumbs: ['portfolio/thumbs/_thumb_uat.jpg']
---

## Bugherd / Teamwork UAT tool

This was a tool I built to help expedite our UAT process while at <a href="https://coolblueweb.com" title="coolblueweb" target="_blank">coolblueweb</a>.

At the time, we used Bugherd for bugs and Teamwork for tasks, and there was no fast way to import one from the other. 

So I built this one page registration for Bugherd webhooks. 

Essentially you would:
- Pick your Bugherd list
- Pick your Teamwork task list
- Connect the two
- Add the Bugherd JS to your site for debugging.

Easy Peasy. The webhook would auto fire when a new bug was created and create a task in TW. 

We turned off setting bug priority because everything would be set as HIGH by clients. Go figure :D

