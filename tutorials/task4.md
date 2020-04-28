### @flyoutOnly 1


# Auto Miner level 3


## Step 1

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

In this task, you must use your agent to mine **only** the ores!   
You need to be careful, if you mine out the other stone around it, there is a chance the mine might collapse...   

This task is an **advanced** task, it is highly recommended you have completed Auto Miner 1 and 2 first!

WARNING - This task includes a 50 second timer, that resets your agent back to the start after 50 seconds.      

## Step 2

In this task, there are a few different ways to check each of the ore blocks.   
The simple way though is a collection of ``||logic: or ||`` commands nested within each other.   

Beyond this, the rest of the task is up to you. The final program will be similar to auto miner 2.   


```ghost
let bob = 0
player.onItemInteracted(BLAZE_ROD, function () {
if (false || false) {
    	
    }
bob = 2
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 3; index++) {
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_ORE) {
                agent.destroy(RIGHT)
            }
            agent.move(UP, 1)
        }
        agent.move(DOWN, 2)
        agent.move(FORWARD, 1)
    }
})

```

```package
seymour=github:gbaman/minecraft-ee-seymour-island
```