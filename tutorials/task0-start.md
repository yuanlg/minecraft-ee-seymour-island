

### @flyoutOnly 1

# 介绍

```template
player.onItemInteracted(BLAZE_ROD, function () {
})

```

# 0. 介绍

## 介绍 @unplugged

欢迎登船，我是帕普特船长。我们刚离开港口，正在路上。
航行时间可能需要好几天，视风向而定。  

![Captain](https://hub.fastgit.org/yuanlg/minecraft-ee-seymour-island/raw/master/media/captain.jpg)

在这个世界里，你将通过编码来解决一系列的难题。您可以随时按键盘上的**C**键进入“编码”窗口。
要完成这些任务，需要使用机器人。     
      
等等，你没带....?

## 机器人 @unplugged

没关系，你可以借我的备机器人。你最好照顾他！

这个小机器人是帮你完成这个世界上的所有任务。
它可以移动，放置方块和打破方块！

![Agent](https://hub.fastgit.org/yuanlg/minecraft-ee-seymour-island/raw/master/media/agent.jpg)

## 开始 @unplugged

让我们开始使用你的新机器人行培训。
首先，让我们试着编写一些代码指示它从钻石块上移动到黄金块上。
![Agent moving](https://hub.fastgit.org/yuanlg/minecraft-ee-seymour-island/raw/master/media/task0-move.gif)

您可以关闭此窗口（按**esc**键）来查看您的机器人。
记住，您可以按**C**再次打开它

## 编码时间
拖出一个 ``||Agent:代理机器人 移动||`` 放到 ``||player:当使用 物品||`` 块里.   
然后您需要将**前**更改为**左**。 
您可能还需要更改步骤数。。。 

准备好运行代码后，用**esc**键关闭此代码窗口
拿着背包里的**木棍**，然后点击鼠标右键，代码就会执行。
你可以通过鼠标滚轮来选择物品，也可以使用数字键选择物品。

```blocks
player.onItemInteracted(BLAZE_ROD, function () {
    agent.move(LEFT, 2)
})
```

```package
seymour=github:yuanlg/minecraft-ee-seymour-island
```
