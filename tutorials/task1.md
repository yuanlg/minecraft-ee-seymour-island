### @flyoutOnly 1


# Circuit Repair


## Step 1

Before we start, make sure you have placed the redstone in the first slot of your Agent.
You can access it's inventory by right clicking on it. Then click on the arrow to the right to move on.

## Step 2
With the inventory now loaded up, we need to move the Agent to the missing slots
(highlighted in green).
Try using the ``||agent:agent move forward||`` and ``||agent:agent turn left/right||`` commands to position your agent in
front of the first green block.

```blocks
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
agent.move(FORWARD, 2)
```


## Step 3
Now place the redstone using ``||agent:agent place forward||``
```blocks
agent.place(FORWARD)
```

```ghost
agent.place()
```

## Step 4
Now have your Agent move backwards and place redstone on the other green marked blocks.
If you find yourself stuck or want to start again, hit the Reset button on the wall.
