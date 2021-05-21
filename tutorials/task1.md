### @flyoutOnly 1


# 电路维修


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

在此任务中，必须修复红石电路。电路缺失的部分在下面已经用绿色方块标出。
你的机器人有很多红石可以用来修理。
把代码都放到 ``||player: 当使用 物品 时||`` 里面。
当你想执行代码时就手持 **木棍** 点击鼠标右键(使用木棍).
点击 **下一步** 按钮继续.

## 第二步
首先，我们需要让我们的机器人移动到被损坏地方（用绿色标记）
使用 ``||agent:代理机器人 移动方向 前||`` 和 ``||agent:代理机器人 转动方向 左/右||`` 指令来控制机器人移动到绿色方块上。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
})
```


## 第三步
现在使用 ``||agent:代理机器人放置方向 下||`` 向绿色方块上放置红石, 这样就可以修复电路.
```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.place(DOWN)
})
```


## Step 4
现在让你的机器人向后移动，把红石放在其他绿色标记的方块上。
如果你发现自己卡住了或想重新开始，可以按墙上的重置按钮。

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
