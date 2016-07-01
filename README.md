# gogit

> 一个结合 crontab 定时推送 github 或 coding 库小玩意。

注：运行此玩意的电脑，必须可运行 python、已经配置好 github 和 coding 使用 ssh key 无密钥通道 git 的 ssh 获取方式(推荐使用常年不关机的 linux 服务器)。

配置参考：[Git 配置安装使用教程操作 github 上传克隆数据](http://www.cnblogs.com/havenshen/p/3493522.html)

## 安装

1.克隆此库
  
  ```shell
  git clone git@github.com:HavenShen/gogit.git
  ```
  
## 配置推送 github 同时提交 coding 库

1.在自己的 github 和 coding 中创建自己的新库

  可取名如：`mygogit` 取得自己的 ssh 地址
  
  * `git@github.com:xxx/mygogit.git`
  * `git@git.coding.net:xxx/mygogit.git`

2.修改及增加刚在 github 克隆的库目录下 `gogit/.git/config` 文件中的 `[remote "origin]"` 节点下 `url` 路径

```shell
url = git@github.com:xxx/mygogit.git
url = git@git.coding.net:xxx/mygogit.git
```

## 设置 `crontab` 定时任务

```shell

#编辑定时任务

crontab -e

#键入每天下午 3 点执行命令

00 15 * * * python /home/gitfile/gogit/main.py #这边执行路径按自己的库目录而改动

#保存退出

:wq
  
```

搞定。

坐等任务每天帮你填补 github 空地，以及 coding 每天推送代码的 + 0.01 码币

## 错误反馈

1.如果 crontab 不执行 python 脚本

在`main.py`文件头部加入
  
```shell
#!/usr/bin/python #对应python环境变量路径
```
  
把 Python（ `main.py` ）的属性改为可执行

```shell
chmod a+x main.py
```

修改 `crontab`

```shell
crontab -e
00 15 * * * /home/gitfile/gogit/main.py
```
  
## License

MIT
