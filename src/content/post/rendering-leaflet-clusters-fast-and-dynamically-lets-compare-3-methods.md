---
publishDate: 2023-01-30T00:00:00Z
title: Rendering Leaflet clusters fast and dynamically - let's compare 3 methods
description: At some point in the career of every front-end developer, there will come a time when they will face the task of map implementation.
excerpt: At some point in the career of every front-end developer, there will come a time when they will face the task of map implementation.
image: https://cdn.hashnode.com/res/hashnode/image/upload/v1675083957669/51d5f370-2b8f-4ad8-aea0-68162241ce17.jpeg
category: Performance
tags:
  - leaflet
  - javascript
canonical: https://agakadela.com/rendering-leaflet-clusters-fast-and-dynamically-lets-compare-3-methods
---

## Maps in front-end development

At some point in the career of every front-end developer, there will come a time when they will face the task of **map implementation**. There are many uses of maps in applications.

Today I will focus on maps that contain a large number of points with specific coordinates. They can be, for example, delivery points, restaurants, shops, etc.

**Leaflet** is a standard solution that developers often use due to its open-source nature. Today we will talk about it.

Let’s imagine now that our task is to add specific points to the map, but we do not add them only once after launching the map, but we **send a request for points each time you move around the map**(moving or changing the zoom level). Sounds familiar?

## Leaflet clusters in action

If so, you’ve probably come across the recommended Leaflet plugin, Leaflet.markercluster. We can find examples where 10,000 or even 50,000 points are implemented in the documentation! Furthermore, thanks to **chunkedLoading**, we can display many points on the map in a relatively user-friendly way.
Below you will find an example of Leaflet clusters from the official Github page of the project:
[https://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-realworld.50000.html](https://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-realworld.50000.html)

Great, the plugin can handle significant challenges, so it will dynamically add points, right? Not so fast! Yes, Leaflet.markercluster is doing quite well, and this is also the solution I introduced in my recent project, but the key to success, in this case, is **knowledge**.

Now imagine this situation: at the beginning, you add 350 points to the map. Then, the user moves the map — we have a new map area, so we send another request for new points and generate 350 points on the map again. It sounds simple, but it is not. Because as you will find out — this operation takes a long time. Not tens of milliseconds, not even several hundred. It takes 2–3 seconds, and sometimes even more!

I don’t even want to think about what numbers we can achieve with a slow internet connection. It happens every time you move the map or change the zoom! The more logic related to the map (added, e.g., search engine, custom marker icons, etc.), the more these results can be depressing.\n\nYou are probably thinking: why add 350 points each time if we can remember those already there and add only those that have not been on the map so far? Additionally, you can delete those markers that are not in the map’s visible area, right? Sounds wonderful :) However, in the case of Leaflet.markercluster, this type of operation can be suicide!

## The solution to Leaflet.markercluster performance issues

Our team searched the entire internet for answers, trying to handle the optimization of our map. We had many custom solutions (like a search engine and a lot of custom logic), but they were not the source of the problem, as it turned out. Finally, one day I came across a fascinating note by danzel, who explained the situation in detail.

The original post you can find here:
[https://github.com/Leaflet/Leaflet.markercluster/issues/59#issuecomment-9320628](https://github.com/Leaflet/Leaflet.markercluster/issues/59#issuecomment-9320628)

**It was like finding the Holy Graal!**

As you’ve probably noticed, when you dynamically change points on the map, the quickest solution is to … **remove all points and re-apply them**! Even those that are already on the map! **No selection. Clean and insert.** Why?

## Leaflet clusters methods comparison

All thanks to the **efficiency of specific Leaflet.markercluster methods**. You can find a detailed comparison of them below. I installed 10000 points for the tests and set them to change after moving the map, and I did sandboxes for three different cases. I didn’t add additional logic to remove clusters out of bounds. I keep it simple in these examples and compare only add/remove methods. \nYou can see the results in ms in the console:

### removeLayer combined with addLayer

[SANDBOX LINK](https://codesandbox.io/s/leaflet-markerclusters-performance-test-removelayeraddlayer-0zclk)

RESULTS:
![removeLayer combined with addLayer](https://res.cloudinary.com/practicaldev/image/fetch/s--eUP0PvPc--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://agawozniak.dev/wp-content/uploads/2021/05/removelayer_addlayer-1.jpg)

### removeLayers combined with addLayer

[SANDBOX LINK](https://codesandbox.io/s/leaflet-markerclusters-performance-test-removelayersaddlayer-2wofo)

RESULTS:
![removeLayers combined with addLayer](https://res.cloudinary.com/practicaldev/image/fetch/s--3bPs-ie8--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://agawozniak.dev/wp-content/uploads/2021/05/removelayers_addlayer.jpg)

### clearLayers combined with addLayers

[SANDBOX LINK](https://codesandbox.io/s/leaflet-markerclusters-performance-test-addlayersclearlayers-q08xl)

RESULTS:
![clearLayers combined with addLayers](https://res.cloudinary.com/practicaldev/image/fetch/s--0-Sjvvjm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://agawozniak.dev/wp-content/uploads/2021/05/addlayers-1.jpg)

As you can notice, **clearLayers combined with addLayers is the fastest method**, and I strongly recommend using it in your project!

The results are fascinating, and as you can see, the most obvious solutions are not always the best. By changing the method of adding and removing markers on the map, we have **improved its performance more than 10 times**! Keep the above scores in mind if you implement Leaflet with Leaflet.markercluster. It can save you many hours searching for a solution.
