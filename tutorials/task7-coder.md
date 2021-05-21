### @flyoutOnly 1


# 迷宫编码


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

在这项任务中，你需要让你的代理人移动到黄金块上.看起来很简单，对吧？...   
但是你看不到路上的障碍！为此，你需要一个朋友来帮你观察,可以让隐藏的障碍物变得可见. 你的朋友会指引你。
当你和你的朋友准备好了，点击下一步按钮。

## 第二步
你可以使用 ``||agent:代理机器人移动方向 前 距离 1||`` 命令来移动你的代理机器人.   
同时你可以使用``||agent:代理机器人转向 左||`` 指令让机器人转向.    

把你的代码都拖放到 ||player: 当使用 物品 时|| 里面,当你想执行代码时就手持 木棍 点击鼠标右键(使用木棍).
祝你好运!

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
agent.move(FORWARD, 1)
})
```

```ghost
agent.turn(LEFT)
```

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
