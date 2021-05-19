### @flyoutOnly 1


# 挖矿工程师 二级(中级)


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

在这项任务中，你必须让你的代理机器人**只**开采铁矿石！  
你要小心，如果你挖出了别的石头，那矿就有可能坍塌。。。

如果你准备好了，请点击下一步.   

## 第二步

首先是探测铁矿石。我们可以从代理机器人下面的方块开始检检测.   
先拖出一个 ``||logic:如果为 则||`` 指令, 然后把 ``||logic:0 = 0||`` 指令放进去(放到true那个位置).   
然后在**‘=’**左边的槽里, 放置一个 ``||agent: 代理机器人检查 方块 方向 下||`` 来检测下面的方块.   
再在**‘=’**右边的槽里放置物品，选择成铁矿，进行比较。
最后在当前这个判断语句里面(如果....则 里面), 增加一个 ``||agent:代理机器人 摧毁方向 下||`` 命令.   
现在试试你的代码吧。如果有问题，你可以使用鼠标右键点击旁边的重置按钮重置任务.   

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE) {
            agent.destroy(DOWN)
        }
})
```

## 第三步

使用你上一步写的代码，你是否可以比较出色的解决检测并摧毁方块的问题?  
将上一步的代码放在一个``||loops:重复 3 次||`` 命令块里， 并且没次重复时把代理机器人向上移动一步.   
最后别忘了让代理机器人再回到原处.   
现在试试你的代码吧。如果有问题，你可以使用鼠标右键点击旁边的重置按钮重置任务. 

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE) {
            agent.destroy(DOWN)
        }
        for (let index = 0; index < 3; index++) {
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_ORE) {
                agent.destroy(RIGHT)
            }
            agent.move(UP, 1)
        }
        agent.move(DOWN, 2)
})

```

## 第四步

最后，再将之前所有代码都放到一个 ``||loops:重复 X 次||`` 命令块中. 你得数一数一共要重复多少次(把x改成你认为的数字).    
最后这一点你得靠自己，祝你好运!

(remember though, you can hit the Reset Agent button in the world at any time to try again)


```ghost
player.onItemInteracted(BLAZE_ROD, function () {
    for (let index = 0; index < 8; index++) {
        if (agent.inspect(AgentInspection.Block, DOWN) == IRON_ORE) {
            agent.destroy(DOWN)
        }
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
seymour=github:yuanlg/minecraft-ee-seymour-island
```
