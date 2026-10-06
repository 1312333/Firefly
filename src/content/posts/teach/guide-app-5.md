---
title: 重装,还原Windows教程
published: 2026-10-06
updated: 2026-10-06
description: 面向小白的Windows重装,还原教程
image: "api"
tags: [教程, 软件]
category: 教程
draft: false
---

> [!QUESTION] QUESTION
> ***如果看到一些错误,欢迎在评论区指出***

# 前言
> 食用本篇文章前，请保证你有一定的电脑基础知识，会使用百度，否则我还是建议你拿去叫人帮忙重装吧.....

# 重装前的准备
- 下载系统镜像
- 校验系统镜像MD5是否和官网的匹配
- 下载驱动安装工具万能网卡版（可选）

# 注意事项
> [!ATTENTION] ATTENTION
> 系统镜像文件不能放在系统盘（通常为C盘）
>
> 重装前请记得**备份C盘里的重要资料！！！**

## 1、下载镜像
就不多说了吧.....要是不会的话那我就建议你去叫人帮忙重装了。

在这里推荐一下几款系统下载站 (无锁定 无广告 无捆绑)

- MSDN[微软原版系统]：[旧版](https://msdn.itellyou.cn/)|[新版](https://next.itellyou.cn/)
- [微软官方下载](https://www.microsoft.com/zh-cn/software-download/)
- [听书先生下载站](https://alive.tingshuxiansheng.cn/)

## 2、校验系统镜像MD5
这步很重要，否则重装过程镜像文件出错将可能会为你带来麻烦。

### 文件校验工具

fHash：
[GitHub](https://github.com/sunjw/fhash/releases)

[微软商店](https://www.microsoft.com/store/apps/9P4CLCRV93DQ)

## 3、重装系统之后需要更新相关硬件驱动

所以需要下载有万能网卡的驱动安装工具，否则重装完成后没网络。当然如果重装Win10-11的话，这步可以省略，因为Win10自带了很多网卡驱动（精简版除外）

> [驱动总裁](https://www.sysceo.com/dc)

# 通用教程

## 制作PE U盘重装

[FirPE](https://firpe.cn/page-247)

> 建议安装 V1.9.X（兼容版）

## 本地安装

### EasyRC 一键装机

[官网](https://firpe.cn/page-196)

# Win8及以上系统还原操作系统

点开左下角`开始菜单(Windows图标)`，在选择“ 重启”时按住`Shift`键，进入Windows 恢复环境 （Windows RE）
点击`疑难解答`->
- 时间点还原：用户可以使用本地存储的还原点，快速将其Windows电脑还原到确切的状态（在早期时间点）。 有关详细信息，请参阅 Windows 的点时间还原。 如果时间点还原不可用，或者需要回退 3 天以上，则可以启用系统还原。 系统还原会将系统文件和设置还原到之前的状态（但不会影响个人文件）。 它适用于Windows 10和Windows 11。
- 一键重置（仅限 Windows 桌面版）。 用户可以在保留其数据和重要自定义项的同时快速修复自己的电脑，而无需提前备份数据。 有关详细信息，请参阅 [按钮重置概述](https://learn.microsoft.com/zh-cn/windows-hardware/manufacture/desktop/push-button-reset-overview?view=windows-11)。

# 升级Windows系统

你可以在[微软官方下载](https://www.microsoft.com/zh-cn/software-download/)中下载windows升级工具
或使用镜像升级
> 如果无法保留`程序和用户文件`时，用注册表编辑器，定位到`计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion`
将`EditionID`改为`EnterpriseS`
