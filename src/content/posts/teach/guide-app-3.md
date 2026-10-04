---
title: Win10神州网信政府版修改教程
published: 2026-10-04
updated: 2026-10-04
description: 希沃七代机上"非常好用"的Win10神州网信政府版
tags: [教程, 软件]
category: 教程
draft: false
---

> [!IMPORTANT] 重要
>**本篇博客中所有软件，内容来自互联网，本站只做免费推荐用于学习分享，且注明了出处，仅限参考、教学与个人使用交流！请勿用于商业目的！**


<details>
<summary>标准Win10神州网信政府版需要增加的教程，一般用不到</summary>

即，复制借用部分

作者：NiGhT_Ray

出处：https://www.cnblogs.com/night-ray/p/14838652.html

版权：本作品采用「署名-非商业性使用-相同方式共享 4.0 国际」许可协议进行许可。

备注：由于部分地区运营商DNS污染，若无法访问蓝奏云链接，请修改域名为wwsx.lanzoue.com或其他最新域名

### 取消Ctrl+Alt+Del打开启动屏幕
'Win + R'调出运行窗口键入'gpedit.msc'打开组策略，找到计算机配置->Windows设置->安全设置->本地策略->安全选项
找到'交互式登录：无须按ctrl+alt+dle'，设置为已启用即可。

### 安装.NET Framework 3.5
由于该系统比较特殊，所有系统联网的部分都被魔改了，所以也就无法自动系统更新，也就无法正常安装.NET Framework 3.5。
神州网信官方提供了手动安装教程和文件，使用dism方式进行安装。
官网地址：[官网链接](https://support.cmgos.com/cmgehelp/hottopic/how_to_install_dotnet_35)
分流：[蓝奏云](https://wwa.lanzoui.com/iBnN9q5i7of)
举例：将.cab后缀文件拖到C:\sxs目录下，然后以管理员方式打开PowerShell或Cmd，直接粘贴语句'dism.exe /online /enable-feature /featurename:NetFX3 /Source:c:\sxs'回车等待就好了。

![图片1](https://img2020.cnblogs.com/blog/1751997/202106/1751997-20210613144436674-31698719.png)

### 解禁麦克风和摄像头限制
1. 官方工具
神州网信官方推出的工具，操作很简单。
官网地址：[官网链接](https://support.cmgos.com/cmgetools/cmge_mic_camera_tool)
分流：[蓝奏云](https://wwa.lanzoui.com/i28lNq0jyed)

![图片2](https://img2020.cnblogs.com/blog/1751997/202112/1751997-20211202125328133-1632371670.png)

2. 系统设置
gpedit.msc打开组策略->计算机配置->管理模板->windows组件->应用隐私
允许Windows应用访问相机---未配置，或强制允许。允许Windows应用访问麦克风---未配置，或强制允许

### 取消强密码
'gpedit.msc'打开组策略->Windows设置->安全设置->账户策略->密码策略
'密码必须符合复杂性要求'禁用，密码长度最小值、最短和最长使用期限都改成0，重启再次输密码登陆到桌面后，双击'ctrl+alt+del'点更改密码，输入旧密码，两次新密码不用输入，即清空了密码。

### 解除屏幕保护程序限制（选项灰色不可更改）
gpedit.msc打开组策略->用户配置->管理模板->控制面板->个性化，将所有与屏幕保护程序相关的选项改为未配置即可。

![图片3](https://img2022.cnblogs.com/blog/1751997/202201/1751997-20220121133104895-695358431.png)

另一种办法，注册表'regedit'定位到'HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Control Panel\Desktop'右栏删掉下表提到的键。

| 键名 | 类型 | 说明 |
| --- | --- | --- |
| ScreenSaveActive | REG_SZ	| 开启屏幕保护程序 |
| ScreenSaverIsSecure |REG_SZ | 锁定屏幕保护程序设置 |
| ScreenSaveTimeOut	| REG_SZ | 屏幕保护程序超时时间 |
| SCRNSAVE.EXE	| REG_SZ | 修改屏幕保护程序路径 |

### 休眠后直接进入桌面
'gpedit.msc'打开组策略->计算机配置->管理模板->控制面板->个性化，如下图所示，将'不显示锁屏'启用，其他选择未配置。

![图片4](https://img2022.cnblogs.com/blog/1751997/202202/1751997-20220207125457163-1331842797.png)

运行窗口键入'netplwiz'。

![图片5](https://img2020.cnblogs.com/blog/1751997/202112/1751997-20211202124732536-2043733058.png)

先选中要设置的账户，再取消选中“要使用本计算机，用户必须输入用户名和密码”选项。
应用后会出现一个要求输入用户名和密码的菜单，输入确定。
然后，在'屏幕保护程序设置'里，取消'在恢复时显示登录屏幕'。

![图片6](https://img2022.cnblogs.com/blog/1751997/202201/1751997-20220121124902900-1850154663.png)

如果是灰色的，按上述操作 解除屏幕保护程序限制 即可解除。

</details>

## 一，部分权限设置

即，复制借用部分

作者：迦叶
链接：https://www.zhihu.com/question/413162271/answer/1409962301
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 1、解禁开启麦克风和摄像头
gpedit.msc打开组策略---》计算机配置---》管理模板---》windows组件---》应用隐私
允许Windows应用访问相机---未配置，或强制允许。允许Windows应用访问麦克风---未配置，或强制允许

### 2、取消强密码
gpedit.msc打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
“用户账户控制：以管理员批准模式运行所有管理员”禁用。
gpedit.msc打开组策略---》Windows设置---》安全设置---》账户策略---》密码策略
“密码必须符合复杂性要求”禁用，密码长度最小值、最短和最长使用期限都改成0，重启再次输密码登陆到桌面后，双击“ctrl+alt+del”点更改密码，输入旧密码，两次新密码不用输入，即清空了密码。

### 3、取消三键打开启动屏幕
gpedit.msc打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
“交互式登录：无须按ctrl+alt+dle”已启用

### 4、登录Microsoft账户（设置-账户中，改为Microsoft账户登录，可用）
gpedit.msc打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
账户：阻止Microsoft账户，右键属性，选择此策略以禁用
gpedit.msc打开组策略---》计算机配置---》管理模板---》Windows组件---》云内容
关闭Microsoft用户体验这项，改为未配置

### 5、解除应用商店以阻止（下载和安装应用，也需要启用第4项最后一条）
gpedit.msc打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置
关闭访问Microsoft Store，改为未配置
gpedit.msc打开组策略---》计算机配置---》管理模板---》windows组件---》应用商店
关闭Microsoft Store应用程序，改为未配置
禁止来自Microsoft Store的所有应用，改为未配置

### 6、启用系统通知
gpedit.msc打开组策略---》计算机配置---》管理模板---》开始菜单和任务栏---》通知，未配置

### 7、屏幕保护程序无法更改解决方法：
点开始--windows系统--命令提示符(以管理员身份打开)
键入gpedit.msc确定
用户配置-管理模板-控制面板-个性化
启用屏幕保护程序
带密码的屏幕保护程序
屏幕保护程序超时
强制使用特定的屏幕保护程序
这几个里面的选项点开，把“启用“改成“未配置“。

## 二、微软账户登录

执行gpedit.msc打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置 （文件夹内选项）关闭访问Microsoft Store，改为未配置后。

此操作只能点亮计算机Microsoft账户登录，让其高亮能操作，实际上登录的过程中还是会被阻止，出现登录错误。

此处需要执行：

1.gpedit.msc打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置 ---》限制Internet 通信，改为未配置。

2.接着回到电脑桌面，点击我的电脑，右键“管理”，进入后找到“服务和应用程序”，点开“服务”。

找到“Software Protection”后，双击打开，把启动类型改为“自动或延迟启动”，接着点击“应用”“确认”按钮。

3.再找到“Microsoft Account Sign-in Assistant”双击打开，把启动类型改为“自动或延迟启动”，接着点击“应用”“确认”按钮。再次双击打开“Microsoft Account Sign-in Assistant”，在”服务状态“出点击”启动“。

正常情况是不会再弹出错误的，如有，重复步骤1，2，重启后在重复步骤3.

重启电脑后，登录Microsoft账户登录时才能成功。

## 三、Microsoft store安装


## 参考文章：

https://www.cnblogs.com/night-ray/p/14838652.html

https://zhuanlan.zhihu.com/p/593119197

https://www.cnblogs.com/letleon/p/19296276
