# drag-drop-xstate (demo example)

Example from [pair programming session with @davidkpiano](https://www.youtube.com/watch?v=uRfQJJArZEg)

To run the example, clone the repo

`git clone ...`

Then run

`cd drag-drop-xstate`

Install dependencies

`npm install`

And you're ready to go try to drag and drop the green box

`npm start`

## Some theory

A finite state machine is a mathematical model of computation that describes the behavior of a system that can be in only one state at any given time. For example, let's say you can be represented by a state machine with a finite number (2) of states: asleep or awake. At any given time, you're either asleep or awake. It is impossible for you to be both asleep and awake at the same time, and it is impossible for you to be neither asleep nor awake.

## Glosary

`State machine`
- also called FSM (finite state machines)
- abstract machine that can be in exactly one of a finite number of states at any given time
- defined by a list of its states, its initial state, and the inputs that trigger each transition

`State`
- is a description of the status of a system that is waiting to execute a transition

`Transition`
- the change from one state to another
- is a set of actions to be executed when a condition is fulfilled or when an event is received. For example, when using an audio system to listen to the radio (the system is in the "radio" state), receiving a "next" stimulus results in moving to the next station. When the system is in the "CD" state, the "next" stimulus results in moving to the next track. Identical stimuli trigger different actions depending on the current state.

`Entry action`
- performed when entering the state


`Exit action`
- performed when exiting the state

`Deterministic automation`
- every state has exactly one transition for each possible input

`Non-deterministic automation`
- an input can lead to one, more than one, or no transition for a given state.

`State charts`
- a formalism for modeling stateful, reactive systems

`Actor model`
-  mathematical model of computation in which everything is an "actor" that can do three things:
    - receive messages
    - send messsages to other actors
    - do something with received messages (i.e. change local state, send messages to other actors, spawn new actors)


## State transition table


### Turnstile example
![](https://whyy.org/wp-content/uploads/2019/04/2019-04-02-e-lee-philadelphia-market-frankfort-8th-street-septa-turnstiles.jpg)

|current state|input|next state|output|
|-------------|-----|----------|------|
|locked       | coin| unlocked |Unlocks the turnstile so that the customer can push through
|locked       | push| locked   |None
|   ---       |---  | ---      |---
|unlocked     | coin| unlocked |None
|unlocked     | push| locked   |When the customer has pushed through, locks the turnstile.


## XSTATE lib

### Links

XState [docs](https://xstate.js.org/docs/)

### Goals
- Adherence to the W3C SCXML Specification and David Harel's original statecharts formalism
- Promote an Actor model event-based architecture
- Compatibility with all frameworks and platforms
- Ability to completely serialize machine definitions to JSON (and SCXML)
- Pure, functional Machine(...) API
- Zero dependencies


### Visualization
Copy the Machine object and paste it [here](https://xstate.js.org/viz/) to get a visualization
