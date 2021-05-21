### @flyoutOnly 1


# 多人电路修复

```template
player.onItemInteracted(BLAZE_ROD, function () {

})
```

## 第一步

在你开始之前，你需要一个朋友和你一起玩来帮助你完成，因为这个任务需要你么协作完成!
在尝试此任务之前，建议你已完成修复电路的单人任务.   
一旦你准备好了，点击下一步按钮.   

## 第二步

这项任务需要大规模地修理一些电路.   
向下看一下电路区域，一共有4个部分，其中2个需要你来修复，另外2个由你朋友修复.
电路需要通过中心线相互连接在一起，铺设红石，通过中间的黄金块来联通电路. 
注意：您只能在**绿宝石**块上放置红石。 


## 第三步

虽然你可以写次个程序，分别对每个方块进行检测是不是绿宝石块，但最好是只写一个程序，执行依次可以扫描所有的绿宝石块，然后放置红石。  
让我们线使用 ``||agent:代理机器人移动方向 左 距离 1||`` 指令，把机器人移动到开始位置.

```blocks
agent.move(LEFT, 1)
```

## 第四步

接下来，让我们编码检查下面的方块是否是绿宝石块.  
首先拖一个 ``||logic:如果为 True 则||``命令出来, 再把 ``||logic:0 = 0||`` 命令方块放到'True'的位置.   
然后在**‘=’**左边的槽里放置一个 ``||agent: 代理机器人检查 方块 下||`` 命令块用来检测下方的方块.  
最后在**‘=’**右边的槽里放置一个物品方块，选择成绿宝石，完成判断语句的比较。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 1)
    if (agent.inspect(AgentInspection.Block, DOWN) == EMERALD_BLOCK) {

    }
})
```

## 第五步

在这个判断语句中如果能检测到绿宝石方块,就使用 ``||agent:代理机器人放置方向 下||``命令放置一个红石.   
我们可能还希望在判断语句执行的前后都让机器人移动一步, 可以使用 ``||agent:代理机器人移动方向 前 距离 1||``指令来让机器人移动，
但是你一定要考虑清楚，机器人移动的方向，然后选择正在的移动方向.

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 1)
    if (agent.inspect(AgentInspection.Block, DOWN) == EMERALD_BLOCK) {
        agent.place(DOWN)
    }
    agent.move(FORWARD, 1)
})
```

## 第六步

完成前5步后，你就基本完成了此任务所需的所有基本代码. 为了一次完成任务并且减少编写代码的数量, 
研究学会使用 ``||loops:重复 X 次||`` 循环命令是个非常好的捷径.   
祝你好运!


```ghost
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 1)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            if (agent.inspect(AgentInspection.Block, DOWN) == EMERALD_BLOCK) {
                agent.place(DOWN)
            }
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 1)
    }
})
```



```package
seymour=github:gbaman/minecraft-ee-seymour-island
```
