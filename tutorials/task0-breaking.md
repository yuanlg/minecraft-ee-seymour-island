

### @flyoutOnly 1

# 摧毁方块

```template
player.onItemInteracted(BLAZE_ROD, function () {
})

```

# 1. 摧毁方块

## 摧毁方块 @unplugged

现在我们知道如何移动我们的机器人了，船长问我们是否能修理一下船体侧面的破损处.   
我们需要收集一块木头来修理它.    
让机器人把它前面的橙色木块挖下来.   
![Breaking block](https://hub.fastgit.org/yuanlg/minecraft-ee-seymour-island/raw/master/media/task0-break.gif)

## 摧毁方块
使用``||Agent:agent destroy||`` 指令去挖取我们需要用来修理船体的木头方块.

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.destroy(FORWARD)
})
```

```ghost
agent.move(LEFT)
```

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
