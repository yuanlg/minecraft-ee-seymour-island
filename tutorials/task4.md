### @flyoutOnly 1


# 挖矿工程师 三级(高级)


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

在这项任务中，你必须让你的代理机器人只开采铁矿石！
你要小心，如果你挖出了别的石头，那矿就有可能坍塌。。。

此任务是**高级**任务，强烈建议您先完成挖矿工程师一级和二级！

警告-此任务包含一个50秒计时器，该计时器将在50秒后将代理重置机器人到初始状态。   

## 第二步

在这个任务中，有几种不同的方法来检查每个矿石。
一个选择是使用多个 ``||logic: 或者 ||`` 方块指令组合，告诉机器人要收**应该**收集些方块.
另一个方法是通过使用``||logic: 非 ||`` 指令告诉机器人哪些方块**不应该**收集
除此之外，剩下的任务由你独自来完成。最终的编码程序类似于挖矿工程师二级的中的编码内容。  


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
seymour=github:yuanlg/minecraft-ee-seymour-island
```
