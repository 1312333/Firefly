---
title: Win10神州网信政府版修改教程
published: 2026-10-04
updated: 2026-10-05
description: 修改希沃七代机上"非常好用"的Win10神州网信政府版
tags: [教程, 软件]
category: 教程
draft: false
---

> [!DANGER] DANGER
> ***此文章没有写完，如果看到一些错误，欢迎在评论区提出***

> [!IMPORTANT] 重要
>**本篇博客中所有软件，内容来自互联网，本站只做免费推荐用于学习分享，且注明了出处，仅限参考、教学与个人使用交流！请勿用于商业目的！**

> [!TODO] TODO
> 如果出现windows组策略修改提示`windows无法获取此电脑上的组策略`时，**把杀软删了！！！**

## 标准Win10神州网信政府版需要增加的教程，一般用不到

复制借用部分

> 作者：NiGhT_Ray
> 出处：https://www.cnblogs.com/night-ray/p/14838652.html
> 版权：本作品采用「署名-非商业性使用-相同方式共享 4.0 国际」许可协议进行许可。
> 备注：由于部分地区运营商DNS污染，若无法访问蓝奏云链接，请修改域名为wwsx.lanzoue.com或其他最新域名

### 取消Ctrl+Alt+Del打开启动屏幕
`Win + R`调出运行窗口键入`gpedit.msc`打开组策略，找到计算机配置->Windows设置->安全设置->本地策略->安全选项
找到`交互式登录：无须按ctrl+alt+dle`，设置为已启用即可。

### 安装.NET Framework 3.5
由于该系统比较特殊，所有系统联网的部分都被魔改了，所以也就无法自动系统更新，也就无法正常安装.NET Framework 3.5。
神州网信官方提供了手动安装教程和文件，使用dism方式进行安装。
官网地址：[官网链接](https://support.cmgos.com/cmgehelp/hottopic/how_to_install_dotnet_35)
分流：[蓝奏云](https://wwa.lanzoui.com/iBnN9q5i7of)
举例：将.cab后缀文件拖到C:\sxs目录下，然后以管理员方式打开PowerShell或Cmd，直接粘贴语句`dism.exe /online /enable-feature /featurename:NetFX3 /Source:c:\sxs`回车等待就好了。

![图片1](/public/assets/images/article-images/2026/1751997-20210613144436674-31698719.png)

### 解禁麦克风和摄像头限制
1. 官方工具
神州网信官方推出的工具，操作很简单。
官网地址：[官网链接](https://support.cmgos.com/cmgetools/cmge_mic_camera_tool)
分流：[蓝奏云](https://wwa.lanzoui.com/i28lNq0jyed)

![图片2](/public/assets/images/article-images/2026/1751997-20211202125328133-1632371670.png)

2. 系统设置
`gpedit.msc`打开组策略->计算机配置->管理模板->windows组件->应用隐私
允许Windows应用访问相机---未配置，或强制允许。允许Windows应用访问麦克风---未配置，或强制允许

### 取消强密码
`gpedit.msc`打开组策略->Windows设置->安全设置->账户策略->密码策略
`密码必须符合复杂性要求`禁用，密码长度最小值、最短和最长使用期限都改成0，重启再次输密码登陆到桌面后，双击`ctrl+alt+del`点更改密码，输入旧密码，两次新密码不用输入，即清空了密码。

### 解除屏幕保护程序限制（选项灰色不可更改）
`gpedit.msc`打开组策略->用户配置->管理模板->控制面板->个性化，将所有与屏幕保护程序相关的选项改为未配置即可。

![图片3](https://img2022.cnblogs.com/blog/1751997/202201/1751997-20220121133104895-695358431.png)

另一种办法，注册表`regedit`定位到`HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Control Panel\Desktop`右栏删掉下表提到的键。

| 键名 | 类型 | 说明 |
| --- | --- | --- |
| ScreenSaveActive | REG_SZ	| 开启屏幕保护程序 |
| ScreenSaverIsSecure |REG_SZ | 锁定屏幕保护程序设置 |
| ScreenSaveTimeOut	| REG_SZ | 屏幕保护程序超时时间 |
| SCRNSAVE.EXE	| REG_SZ | 修改屏幕保护程序路径 |

### 休眠后直接进入桌面
`gpedit.msc`打开组策略->计算机配置->管理模板->控制面板->个性化，如下图所示，将`不显示锁屏`启用，其他选择未配置。

![图片4](https://img2022.cnblogs.com/blog/1751997/202202/1751997-20220207125457163-1331842797.png)

运行窗口键入`netplwiz`。

![图片5](https://img2020.cnblogs.com/blog/1751997/202112/1751997-20211202124732536-2043733058.png)

先选中要设置的账户，再取消选中“要使用本计算机，用户必须输入用户名和密码”选项。
应用后会出现一个要求输入用户名和密码的菜单，输入确定。
然后，在`屏幕保护程序设置`里，取消`在恢复时显示登录屏幕`。

![图片6](https://img2022.cnblogs.com/blog/1751997/202201/1751997-20220121124902900-1850154663.png)

如果是灰色的，按上述操作 解除屏幕保护程序限制 即可解除。

</details>

# 希沃七代机上"非常好用"的Win10神州网信政府版修改方式

复制借用部分

> 作者：兰柯耴梦
> 出处：https://zhuanlan.zhihu.com/p/593119197

## 一，部分权限设置

即，复制借用部分

> 作者：迦叶
> 链接：https://www.zhihu.com/question/413162271/answer/1409962301
> 来源：知乎
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### 1、解禁开启麦克风和摄像头
`gpedit.msc`打开组策略---》计算机配置---》管理模板---》windows组件---》应用隐私
允许Windows应用访问相机---未配置，或强制允许。允许Windows应用访问麦克风---未配置，或强制允许

### 2、取消强密码
`gpedit.msc`打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
“用户账户控制：以管理员批准模式运行所有管理员”禁用。
`gpedit.msc`打开组策略---》Windows设置---》安全设置---》账户策略---》密码策略
“密码必须符合复杂性要求”禁用，密码长度最小值、最短和最长使用期限都改成0，重启再次输密码登陆到桌面后，双击“ctrl+alt+del”点更改密码，输入旧密码，两次新密码不用输入，即清空了密码。

### 3、取消三键打开启动屏幕
`gpedit.msc`打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
“交互式登录：无须按ctrl+alt+dle”已启用

### 4、登录Microsoft账户（设置-账户中，改为Microsoft账户登录，可用）
`gpedit.msc`打开组策略---》计算机配置---》Windows设置---》安全设置---》本地策略---》安全选项
账户：阻止Microsoft账户，右键属性，选择此策略以禁用
`gpedit.msc`打开组策略---》计算机配置---》管理模板---》Windows组件---》云内容
关闭Microsoft用户体验这项，改为未配置

### 5、解除应用商店以阻止（下载和安装应用，也需要启用第4项最后一条）
`gpedit.msc`打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置
关闭访问Microsoft Store，改为未配置
`gpedit.msc`打开组策略---》计算机配置---》管理模板---》windows组件---》应用商店
关闭Microsoft Store应用程序，改为未配置
禁止来自Microsoft Store的所有应用，改为未配置

### 6、启用系统通知
`gpedit.msc`打开组策略---》计算机配置---》管理模板---》开始菜单和任务栏---》通知，未配置

### 7、屏幕保护程序无法更改解决方法：
点开始--windows系统--命令提示符(以管理员身份打开)
键入`gpedit.msc`确定
用户配置-管理模板-控制面板-个性化
启用屏幕保护程序
带密码的屏幕保护程序
屏幕保护程序超时
强制使用特定的屏幕保护程序
这几个里面的选项点开，把“启用“改成“未配置“。

## 二、微软账户登录

执行`gpedit.msc`打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置 （文件夹内选项）关闭访问Microsoft Store，改为未配置后。

此操作只能点亮计算机Microsoft账户登录，让其高亮能操作，实际上登录的过程中还是会被阻止，出现登录错误。

此处需要执行：

1.`gpedit.msc`打开组策略---》计算机配置---》管理模板---》系统---》internet通信设置 ---》限制Internet 通信，改为未配置。

2.接着回到电脑桌面，点击我的电脑，右键“管理”，进入后找到“服务和应用程序”，点开“服务”。

找到“Software Protection”后，双击打开，把启动类型改为“自动或延迟启动”，接着点击“应用”“确认”按钮。

3.再找到“Microsoft Account Sign-in Assistant”双击打开，把启动类型改为“自动或延迟启动”，接着点击“应用”“确认”按钮。再次双击打开“Microsoft Account Sign-in Assistant”，在”服务状态“出点击”启动“。

正常情况是不会再弹出错误的，如有，重复步骤1，2，重启后在重复步骤3.

重启电脑后，登录Microsoft账户登录时才能成功。

## 三、Microsoft store安装

安装仍借用别人的杰作

作者：冰墩墩

如果电脑Windows10中没有Microsoft store，可以用以下方法安装。
按`Win + Q`打开搜索，输入`powershell`，然后以管理员身份运行；


复制下面的代码，粘贴到`powershell`窗口中并按 Enter 执行（powershell中的粘贴键是鼠标右键）：
Get-AppXPackage *WindowsStore* -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}

或者：
联网状态下按`Win+R`输入`wsreset -i`回车，Windows 会自动把商店装回来（1–3 分钟，期间没有进度条）；若仍无效，用管理员身份打开`powershell`执行`winget install 9WZDNCRFJBMP`

最后重启电脑就可以了。

如果上面的方法没有用，或者你的系统是 LTSC/LTSB版本，可以尝试专门的工具来安装 Microsoft Store。

### Microsoft Store安装工具：

LTSC 2021 修复包： [GitHub 项目地址](http://github.com/brokyz/Win10_LTSC_2021_FixPacks)

下载后,将文件解压，在解压好的文件夹里，点击打开 名为Add-Store（文件类型为windows命令脚本）的文件，键入命令Add-Store.cmd回车即可。



当左下角出现 Press any Key to Exit. 时，关闭窗口，重启电脑即可。以上，就是安装Microsoft Store的方法。

以上第三方法成功率很高，不过，对小白而已，安装最好不要先把一些英文软件给提前删了，不然，没有支撑软件也没办法运行。

Microsoft Store安装好了后，能在里面搜索下载软件，但是，仍任会卡在下载界面，显示错误，即


### 解决步骤如下：

首先设置用户配置

1、按下`Win+R`组合键呼出运行，在框中输入`gpedit.msc`按下回车键打开`本地组策略编辑器`

2、在`本地组策略`编辑器左侧依次展开“用户配置”—“管理模板”—“indows组件”—“Windows Installer”打开

3、找到“始终以提升的权限安装”项目双击打开，把策略设置为`已启动`，点击应用并确定。

4、接着设置`阻止从可移动媒体进行任何安装`为`已禁用`确定之后，设置完成。

最后设置计算机配置

1、按下`Win+R`组合键呼出运行，在框中输入`gpedit.msc`按下回车键打开“本地组策略编辑器”

2、在`本地组策略`编辑器左侧依次展开`计算机配置 — 管理模板 — Windows组件 — Windows Installer`打开。

3、找到`关闭Windows Installer`项目双击打开，把策略设置为“未配置”，点击应用并确定。

4、接着设置`阻止用户使用Windows Installer安装更新和升级程序`为`已禁用`确定之后，设置完成

重启计算机后，就能正常通过Microsoft Store下载更新软件了。

## 用脚本扬组策略

一、组策略还原：
1.使用`Windows + X`快捷键打开`「命令提示符(管理员)」`
2.执行如下命令，之后重启电脑即可。
`secedit /configure /cfg %windir%\inf\defltbase.inf /db defltbase.sdb /verbose `
二、组策略重置：
1.使用`Windows + X`快捷键打开`「命令提示符(管理员)」`
2.执行如下命令，之后重启计算机即可
~~~
RD /S /Q "%WinDir%\System32\GroupPolicyUsers" 
RD /S /Q "%WinDir%\System32\GroupPolicy" 
gpupdate /force
~~~

> 备注：
> 该方法可以直接从安装 Windows 的分区中直接删除组策略配置文件夹，达到重置目的
> 以上所述方法适用于所有windows系统

或者：
按下`Win+R`组合键呼出运行，在框中输入`cmd`按下`shift+回车键`打开`cmd`，然后粘贴以下脚本

~~~
secedit /configure /cfg %windir%\inf\defltbase.inf /db defltbase.sdb /verbose
RD /S /Q "%WinDir%\System32\GroupPolicyUsers" 
RD /S /Q "%WinDir%\System32\GroupPolicy" 
gpupdate /force
~~~

## 神州网信Windows10启动Microsoft Account Sign-in Assistant服务时提示0x800704ec的解决办法

在服务中启动 Microsoft Account Sign-in Assistant 时会提示 0x800704ec 的错误！
经过一番折腾，找到了如下解决办法！
在此感谢 placeholder 大佬！

复制内容并保存为
**Microsoft Account Sign-in Assistant.reg**

~~~
Windows Registry Editor Version 5.00
 
; ==================================================
; 神州网信版Windows启用微软账户登录助手服务
; 适用于解决神州网信版无法使用微软账户登录的问题
; 来源：http://wuyou.net/forum.php?mod=redirect&goto=findpost&ptid=447464&pid=5851830
; ==================================================
 
; 策略管理器 - 账户设置
; 允许Microsoft账户登录助手运行
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PolicyManager\current\device\Accounts]
"AllowMicrosoftAccountSignInAssistant"=dword:00000001
; 值说明：
; dword:00000001 = 启用（允许微软账户登录助手）
; dword:00000000 = 禁用（默认的神州网信限制设置）
 
; 系统策略 - 用户账户控制
; 允许连接用户（微软账户）登录系统
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System]
"NoConnectedUser"=dword:00000000
; 值说明：
; dword:00000000 = 允许连接用户（启用微软账户登录）
; dword:00000001 = 禁止连接用户（默认的神州网信限制）

~~~

## 神州网信政府版直接更新

非要直接更新的话用注册表编辑器，定位到 计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion
将 EditionID 改为 EnterpriseS
**详细步骤**可以看这个：

<iframe width="100%" height="468" src="https://www.bilibili.com/video/BV1EAKLeUEZJ/?spm_id_from=333.1387.homepage.video_card.click&vd_source=4acd65623d89fa955a36280c19da42f7" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" &autoplay=0> </iframe>

## 参考文章：

https://www.cnblogs.com/night-ray/p/14838652.html

https://zhuanlan.zhihu.com/p/593119197

https://www.cnblogs.com/letleon/p/19296276
