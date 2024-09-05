# 🎉🎉🎉whisper 文档

- Link：https://xazhaox.github.io/whisper-docs/

### 🏵️ 本地开发

```shell
# 从github拉取代码
https://github.com/xazhaox/whisper-docs.git

# 启动
pnpm run docs:dev
```

### 🎯 Nginx 发布

```shell
# 打包
pnpm run docs:build

# 压缩包
tar -czvf whisper-docs.tar.gz -C docs/.vitepress dist

# 将 whisper-docs.tar.gz 上传至 nginx 服务器/opt/service/目录

# 解压到指定目录
tar -xzvf /opt/service/whisper-docs.tar.gz -C /opt/service/

# nginx 配置目录/usr/local/nginx/conf
vim /usr/local/nginx/conf/nginx.conf

# 启动 nginx
cd /usr/local/nginx/sbin
./nginx

# 开放端口
firewall-cmd --zone=public --add-port=80/tcp --permanent

# 立即重新加载防火墙
firewall-cmd --reload

# 查看开放端口
firewall-cmd --zone=public --list-ports

# 访问
````



