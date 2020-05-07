#!/bin/bash

# 脚本报错，直接终端执行
set -e

function SuceessEcho(){
 echo "\033[32m>>$1\033[0m"
}

# $1 env
# $2 branch
env=$1
branch=$2
npm_install=$3

DIR="$( cd "$( dirname "$0"  )" && pwd  )"
echo -e $(SuceessEcho "-------开始构建-------")
cd $DIR
echo -e $(SuceessEcho "进入项目目录：$DIR")

echo -e $(SuceessEcho "切换至 $branch 分支")
git checkout origin/$branch

if [ $npm_install = "yes" ];then
echo -e $(SuceessEcho "[start] npm install")
	npm install
echo -e $(SuceessEcho "[end] npm install")
fi



echo -e $(SuceessEcho "[start] npm run build:$env，并重启pm2服务")
npm run pm2:$env
echo -e $(SuceessEcho "[end] npm run build:$env，并重启pm2服务")

echo -e $(SuceessEcho "-------发布成功-------")