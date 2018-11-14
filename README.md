# learning_nodejs

## Common

* npm install 说明

    npm install XXX：本地安装，即安装到当前目录的 node_modules；
    
    npm install XXX -g：全局安装，安装到npm环境变量指向的目录下的 node_modules；

* package.json

    当前包的配置文件；
    
    依赖包版本号前面的标号^，表示向后兼容，即主版本号相同就可以；

* package-lock.json

    当前包依赖包的配置文件；

    记录副版本号，确保存与发布时的依赖包版本一致；

* strong etag 和 weak etag 的区别？

    strong etag：是完完全全一个字节都不差的一样；

    weak etag 是 Semantic equivalence，比如动态生成的页面显示出来的内容都一样，只是一些时间戳什么的不一样；


---
## static-web-server

进入目标**server**目录，执行以下步骤：
* npm install
* npm start