### @flyoutOnly 1


# Multiplayer circuits


## Step 1

Before you get started, it is important you have a friend in the room beside you to 
help with this task, as it requires 2 players!
It is also recommended that you have completed the fixing circuits single player 
task before attempting this one.

## Step 2

This task involves repairing some curcits together, on a large scale.   
Look down into the circuit area. There are 4 quadrants, 2 of which you have to fix
and 2 that your friend has to fix. They feed into each other across the centre line.
The redstone current travels through the centre gold blocks. 
Note you can only place redstone on the **Green Emerald** blocks.  


## Step 3

Although you could write a program that had instructions for each block to check, why
not just build a program that scans for all emerald blocks, then places redstone?   
Let's start by using ``||agent:agent move left/right||`` to get your agent to a corner.

```blocks
agent.move(LEFT, 1)
```

## Step 4
