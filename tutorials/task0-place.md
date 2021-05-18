

### @flyoutOnly 1

# 维修

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

# 1. 维修

## 维修 @unplugged

现在我们已经有一些木头用于修理，把机器人移动岛需要修理的地方去。      
![Agent repair](https://hub.fastgit.org/yuanlg/minecraft-ee-seymour-island/raw/master/media/task0-place.gif)

## 移动
首先，把机器人移动到金色方块上.   
完成后点击下一步.      

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 3)
})
```

## 维修
现在使用 ``||Agent:代理机器人 放置方向 左||`` 指令把刚才收集的木材放到船的侧面破损处。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 3)
    agent.place(LEFT)
})

```

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
