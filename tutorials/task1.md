### @flyoutOnly 1


# Circuit Repair


## Step 1

In this task, you must fix the redstone circuit. The missing pieces are marked with green blocks below.
Your agent has plenty of redstone, ready to be used for this repair.

## Step 2
First, we need to get our agent to the sections that have been damaged (marked with screen).
Try using the ``||agent:agent move forward||`` and ``||agent:agent turn left/right||`` commands to position your agent in
front of the first green block.

```blocks
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
agent.move(FORWARD, 2)
```


## Step 3
Now place the redstone using ``||agent:agent place redstone below||``
```blocks
agentExt.place_redstone_below()
```


## Step 4
Now have your Agent move backwards and place redstone on the other green marked blocks.
If you find yourself stuck or want to start again, hit the Reset button on the wall.
