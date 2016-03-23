# gogit

> 一个用于定时推送github或coding库小玩意。

注：运行此玩意的电脑，必须已经配置好github和coding使用ssh key 无密钥通道git的ssh获取方式。

## 安装

1.克隆此库
  
  ```shell
  git clone git@github.com:HavenShen/gogit.git
  ```

2.设置`crontab`定时任务

  ```shell
  #编辑定时任务
  crontab -e
  #键入每天下午3点执行命令
  00 15 * * * python /home/gitfile/gogit/main.py #这边执行路径按自己的库目录而改动
  #保存退出
  :wq
  ```
  
## 配置推送github同事提交coding库

1.在coding创建一个新库gogit得到ssh地址`git@git.coding.net:xxx/gogit.git`

2.只需在刚github克隆的库目录下`gogit/.git/config`文件中的`remote "origin"`节点下增加一条

  ```shell
  url = git@git.coding.net:xxx/gogit.git
  ```

搞定。

坐等任务每天帮你填补github空地，以及coding每天推送代码的 + 0.01码币

## License

MIT
