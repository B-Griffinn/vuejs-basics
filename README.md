# Intro to Vuejs Basics

## Vue instance
- Similar to react we need a root element to display in the application,
- a view instance is and object that holds your data, methods, and more.
- it is the core of your FE application

## Data & Methods
- each vue instance proxies all the properties found in its `data` object
- data holds the contents aka state of the instance
- methods are functions that can be called within the instances `el` container 

## Data Binding
- `v-bind:href="<data-name>"`
- the `how` html methods are bound to an instance and its methods to a set of data displayed on the application


## Events
- click, dblclick, mousemove, etc. are all events
- use the `v-on:<event-name>="<method-name>"`  

## Event Modifiers
[Vuejs Event Modifier Docs] (https://vuejs.org/v2/guide/events.html#Event-Modifiers)
- preventDefault() in vue is = `v-on:click.prevent="<method>"`