# nuxt-deploy

 - 可自定义多环境
 - 使用pm2进行守护进程
 - 可运行交互式命令行进行部署
 - 可配合jenkins使用

注意：使用create-nuxt-app初始化的时候选择一个后端server，本项目选择了koa。`server/index.js`将作为pm2的运行脚本


## 新增环境变量MY_ENV
新增环境变量MY_ENV来读取`envConfig.js`内配置（因为我们构建测试环境时，NODE_ENV值应是producttion，与正式保持一致。所以MY_ENV更好地让我们区分多环境）

## 命令
该项目只配置了test和prod两个环境
### 进入开发
```
npm run dev
```


### 构建相关
```
npm run build:test
npm run build:prod
```
### 前台运行服务
要求预先构建项目

```
npm run start:test
npm run start:prod
```
### pm2 运行项目

具体查看`package.json`，和`pm2.config.js`
```
# 以下命令包含构建操作，无需事先手动运行构建
npm run pm2:test
npm run pm2:prod
```

## 脚本

### 脚本流程
具体查看 `deploy.sh`

1. 切换分支，拉取更新
2. 是否执行npm install
3. 执行构建
4. 运行pm2


### 交互式输入参数运行
运行下面的命令，控制台会引导你完成构建

```
npm run deploy
```

### 直接运行脚本
可配合jenkins使用

```bash
# 脚本参数
# $1 env test | prod
# $2 branch
# $3 npm_install yes | no

bash deploy.sh prod master yes
```
