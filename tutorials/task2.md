### @flyoutOnly 1


# 挖矿工程师 一级(初级)


## 第一步

```template
player.onItemInteracted(BLAZE_ROD, function () {
})
```

我们用机器人在前面挖一个矿井吧。首先，先让机器人清理前面的障碍, 使用 ``||agent:代理机器人 摧毁方向 前||``.
把它拖放到 ``||player: 当使用 物品 时||`` 里面, 然后点击鼠标邮件
当你想执行代码时就手持 **木棍** 点击鼠标右键(使用木棍).

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
agent.destroy(FORWARD)
})
```

## 第二步
现在让我们把 ``||agent:代理机器人 移动方向 上||`` 指令, 放在另一个
``||agent:代理机器人 摧毁 前||`` 下面.
你能试着让你的机器人打破第一列的3块石头吗？

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
agent.destroy(FORWARD)
agent.move(UP, 1)
agent.destroy(FORWARD)
agent.move(UP, 1)
agent.destroy(FORWARD)
agent.move(UP, 1)
})
```


## 第三步
你知道有更好的方法来重复3次一样的动作吗？而不是把同样动作的代码放3次。
答案是：重复（循环）!  
你可以使用 ``||loops:重复 3 次||`` (or ``||loops:for||`` in Python) 指令，把需要重复执行的指令放在它里面。  
所以好的办法是不是应该把 ``||agent:代理机器人 摧毁方向 前||`` 和 ``||agent:代理机器人 移动方向 上||``
放到 ``||loops:重重 3 次||``里面?

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
for (let index = 0; index < 3; index++) {
    agent.destroy(FORWARD)
    agent.move(UP, 1)
}
})
```




## 第四步
最后，利用你所学的知识, 你能用另一个 ``||loops:重复 7 次||`` 
(or ``||loops:for||`` in Python) 指令把矿井挖到黄金快那里吗? 一旦完成，确保你的机器人站在黄金块上.

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
