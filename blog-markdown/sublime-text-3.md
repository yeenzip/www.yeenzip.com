# 通用配置

按 `Ctrl`+`Shift`+`p` 会弹出 Package Control，第一次打开需要安装。

## (可选) 给 Package Control 设置代理

Package Control 安装包的速度可能会比较慢，你可以设置一个代理来加速。

选择 `首选项`-`Package Setting`-`Package Control`-`Setting-User` 在里面配置 `http_proxy` 和 `https_proxy`，格式可以参考 `Setting-Default`。这里举个例子，假设我有一个端口是 `1080` 的 `Socks5` 代理，那么我可以这样设置：

```
{
 "http_proxy": "socks5://127.0.0.1:1080",
 "https_proxy": "socks5://127.0.0.1:1080"
}
```

## 汉化插件

按 `Ctrl`+`Shift`+`p` 打开 Package Control，在搜索框中输入 "Install Package"，在弹出来的候选向里面选择 `Package Control: Install Package`，按回车确定。过几秒之后会再次弹出来一个搜索框，在里面输入 "localization"，选择第一个，回车确定。

安装好插件之后 Sublime 就被汉化了。

## 代码格式化插件

按 `Ctrl`+`Shift`+`p` 打开 Package Control，在搜索框中输入 "astyle"，选择 `SublimeAstyleFormatter`。

安装好之后可以选择 `首选项`-`Package Setting`-`SublimeAstyleFormatter`-`Setting-User` 来进行设置风格，缩进等等。

默认的格式化快捷键是 `Ctrl`+`Alt`+`F`，可以在 `Key Blinding-User` 里面修改。

# C++ 配置

## 在 sublime 中编译并运行 C++ code

sublime 上可以自定义编译系统，选择`工具`-`编译系统`-`新建编译系统...`

会弹出来一个 `untitled.sublime-build` 的文件，可以自定义编译方式。

Windows 平台

```
{
	"cmd": ["g++", "${file}", "-o", "${file_path}/${file_base_name}"],
	"file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
	"working_dir": "${file_path}",

	"variants":
	[
		{
			"name": "RunInCommand",
			"cmd": ["cmd", "/c", "g++", "-std=c++14", "${file}", "-o", "${file_path}/${file_base_name}", "&&", "start", "cmd", "/c", "${file_path}/${file_base_name} & pause"]
		}
	]
}
```

Linux 平台

```
{
 "cmd": ["g++", "${file}", "-o", "${file_path}/${file_base_name}"],
 "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
 "working_dir": "${file_path}",

 "variants":
 [
  {
   "name": "Run",
   "cmd": ["terminal" "-e" "bash -c\"g++ -std=c++14 -o '${file}' '${file_path}/${file_base_name}' ; '${file_path}/${file_base_name}' ; read -p '\nPress any key to continue...' \""]
  }
 ]
}
```

这里的 `terminal` 需要换成你系统上的终端，例如 `gnome` 桌面就改成 `gnome-terminal`

# 代码段 (code snippets)

将一些常用的代码段 (function or algoritm) 保存下来，以便重复使用。

Sublime snippets 的创建方式可以参考[这篇文章](https://www.freecodecamp.org/news/a-guide-to-preserving-your-wrists-with-sublime-text-snippets-7541662a53f2/)。

按 `Ctrl`+`Alt`+`Shift`+`P` 可以查看当前源文件类型，以配置 `scope`。

[这里](https://github.com/yeenzip/Sublime-Snippets) 是我常用的 Sublime Snippets