### @flyoutOnly 1


# 捕鱼器


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

在这个任务中，我们需要把小丑鱼和河豚从船上移到码头上. 首先, 让我们去选择鱼吧. 使用 ``||agent:代理机器人启动方向 前 距离 2||`` 指令让机器人停在采集鱼的地点. 
然后使用 ``||agent:机器人收集 小丑鱼||`` 指令 去钓小丑鱼.   
把你的代码都放到 ``||player: 当使用 物品 时||`` 里面。
当你想执行代码时就手持 **木棍** 点击鼠标右键(使用木棍).

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
agent.move(LEFT, 1)
agent.move(FORWARD, 2)
agent.collect(CLOWNFISH)
})

```

## 第二步
现在一些小丑鱼已经收集来了， 让我们也换一些地点收集. 可以尝试将你当前的代码放在一个 ``||loops:重复 3 次 ||`` 的指令中(or ``||loops:for loop||`` in Python).

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
agent.move(LEFT, 1)
for (let index = 0; index < 3; index++) {
    agent.move(FORWARD, 2)
    agent.collect(CLOWNFISH)
}
})

```

## 第三步
现在你的小丑鱼都收集好了，接下来写一个程序把你的代理机器人带到码头上的卸货点， 然后使用 ``||agent:代理机器人丢弃所有 方向 前||`` 指令把鱼放进桶里.

```ghost
agent.dropAll(FORWARD)
```

## 第四步
把你现在所有的代码放到一个 ``||loops:重复 10 次||`` 指令中，让机器人重复去钓鱼、把鱼放进桶里.

## 第五步
最后，重复同样的过程来编码处理河豚。建议你自己独立完成哦.

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
