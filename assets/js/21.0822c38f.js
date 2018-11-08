(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{178:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("p",[t._v("后端开发之我见：学习后端并不是要学习具体哪中工具，而是学习后端开发的模式，通过掌握一种工具来了解后端开发模式，用那种技术只是学习一个工具的事情。")]),t._v(" "),a("p",[t._v("由于本职不是后端开发，所以对于更深入的知识我也没有能力讲清楚，只是通过这个教程让大家能够自己编写后台。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("作为一名移动端开发者，你是不是对后台开发没什么了解，觉得写后台是另一座大山，认为需要花很多时间才能学会？经常想到一个好创意打算独立开发一款 App ，却因为不会写后台而迟迟没有开始？其实后台开发一点都不难，以单纯完成业务开发为目标来看，后台开发要比写 App 简单的多。为什么我会这么说，看下面的例子就知道了。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("现在相信了吧？后台开发真的很简单，当然，这是得益于框架才能如此简单，从监听请求到处理请求并返回信息，框架是帮我们做了很多事情的，但是我们现在只需要先掌握框架怎么用就可以了。我敢说，如果你是 Android 开发者，甚至只需要几个小时的时间，就能从零学会用 Spring 框架完成常见业务的接口开发。如果你是 IOS 开发者，就算没有 Java 基础，相信就这简单明了的语法，你也可以很快上手。")]),t._v(" "),a("p",[t._v("接下来本文将从 IDE 的安装开始，使用 Spring boot 框架，Mysql 数据库，完成一个验证用户登录的接口。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("工欲善其事，必先利其器，我选择的 IDE 是 Intellij IDEA，它和 Android Studio 是同平台的 IDE，都出自 JetBrains 公司。对，就是那个推出 Kotlin 语言的很牛逼的公司。用它写代码有多爽我就不说了，Android 开发的小伙伴可以无缝上手。Intellij IDEA 有收费的 Ultimate 版和免费的 Community 版，Ultimate 版功能强大，有30天的免费试用期，这里我们选择 Ultimate 版。"),a("a",{attrs:{href:"https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intellij IDEA 官网下载页面"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Mysql 的安装就不说了，很简单，网上也有很多教程。这里推荐两个数据库管理软件，Mac 系统推荐 Sequel Pro，Windows 系统推荐 Navicat。")]),t._v(" "),a("p",[t._v("IDE 和数据库装好之后，就可以正式开始创建第一个工程了。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("Android 开发的小伙伴们看到 Gradle Project 有没有很惊讶？没错，此 Gradle 就是彼 Gradle，在后台开发中它也是负责管理依赖和项目构建的(其实对于 Android 开发者来说，入门后台开发的成本就和学习一个 RxJava 框架差不多，你敢说你花了 10 个小时没学会 RxJava 怎么用? )。IOS 小伙伴没听过 Gradle 不要害怕，你把它当成 cocoapods 就好了。Packaging 就是项目开发完后要打包成什么形式，有 Jar 和 War 两个选项，其中 War 形式用来在 Tomcat 、Nginx 等容器中运行，这里我们选择 Jar 就好了，Spring boot 在 Jar 包中集成了容器，我们可以直接忽略容器这一环节。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("Spring boot 把不同功能划分为模块，用什么选什么就好了。目前我们需要的模块只有三个，Web、JPA 和 MySql。其中 JPA 全程为 Java Persistence API，是 Spring boot 中用来数据持久化的，其他的数据持久化技术还有 Hibernate、MyBatis 等。使用数据持久化方案能够非常简单方便的在后台控制与数据库的交互。")]),t._v(" "),a("p",[t._v("然后就是填写项目名称和项目路径，然后点击 Finish。如果你是第一次使用这种方式创建 Spring boot 项目，IDE 要从 Spring 官网下载 Jar 包，受限于咱们的网络环境，可能要等待几分钟。")]),t._v(" "),a("p",[t._v("当项目创建完成之后，会弹出下面的提示框来让你选择 Gradle 配置，直接选择 OK 就好。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("现在只需要关注一下3点:")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),a("p",[t._v("这是因为，我们在 buidle.gradle 中引用了 Jpa 和 Mysql 的依赖，但却没有填写数据库配置信息,所以后台连接不上数据库，当然要报错了。接下来我们在 application.properties 中添加上数据库的配置信息。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("接下来写一个复杂点的接口，验证 Mysql 数据库中的用户名密码来模拟一个登录接口。")]),t._v(" "),a("p",[t._v("首先新建 4 个包，按照后台的规范来存放不同功能的文件，看下图。")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("用一个简单的时序图表示就是下面这样:")]),t._v(" "),t._m(35),a("p",[t._v("不理解没关系，写完我们这个验证用户登录的接口保证能秒懂。")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),a("p",[t._v('这个类本身没什么可说的，就是一个标准的 JavaBean，这里要注意用的几个注解。@Entity 用于告诉 Jpa 这是一个实体，@Table(name="user") 表明这个类是个数据库中的 User 表对应的。@Id 和 @GeneratedValue(strategy = GenerationType.AUTO) 表明 id 字段是表的主键并且是自增的。')]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),a("p",[t._v("同样很简单，用 @Repository 注解声明这是一个 Repository，继承了 Jpa 的CrudRepository 接口，泛型中传入的参数分别是这个 Repository 要操作的表的实体和主键类型。然后声明了一个方法 findByUsernameAndPassword(),参数为 username 和 password，返回类型为 User。因为我们使用了 JPA 规范的方法命名，所以我们并不需要任何 Sql 语句，就能完成对数据的查询操作。而且 JPA 会为我们自动生成实现类，并不需要我们自己实现这个类。")]),t._v(" "),a("p",[t._v("好了，有了这个接口我们就能直接在 Service 中调用接口中的方法来根据 username 和 password 对数据库进行查询并得到查询到的 User 对象了。")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),a("p",[t._v("依然很简单，这个类的 checkLogin 方法接收 username 和 password 参数，并调用 UserRepository 中的方法来查询数据库，如果查到对应的用户，则返回登录成功，否则返回登录失败。其中 @Service 注解声明这是一个 Service 类。@Autowired 注解声明了 userRepository 对象需要 Spring boot 框架来为我们提供依赖注入，这样就不需要我们自己来管理对象间的依赖关系。")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),a("p",[t._v("看到这里你会发现，这个类和之前第一个例子中编写的 HelloController 很像。只不过第一个例子中，方法直接返回了字符串，而这里则通过调用 Service 中的方法进而达到操作数据库的目的。相信不用多说，你已经能很轻易地的看懂了。")]),t._v(" "),t._m(48),t._v(" "),a("p",[t._v("我们已经编写完了所有的代码，但是现在还有一步非常重要，就是配置 JPA，因为此时 JPA 还不知道我们想要如何控制数据库。很简单，复制下面的代码到上面提到过的 application.properties 配置文件中就好了。")]),t._v(" "),t._m(49),a("p",[t._v("每一行的含义我就不说了，总之这是告诉 Jpa ，它应该以何种方式响应我们对数据库的操作。网上相关资料非常多，等到你自己编写更复杂的后台项目时自己查一下就好了。")]),t._v(" "),t._m(50),t._v(" "),a("p",[t._v("Ok,到这里你可以启动项目来进行测试了。细心的读者可能会疑问，数据库中的 user 表不是还没创建吗？不要着急，等项目启动完成后打开数据库看一眼就知道了。其实项目启动的过程中，JPA 已经根据代码中的实体类为我们创建了对应的表，是不是感觉 JPA 很强大?")]),t._v(" "),a("p",[t._v("如果数据库中已经多了 user 表，说明一切顺利，你可以在表中随便添加一条记录来验刚刚写的接口。")]),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),a("p",[t._v("到这里我们已经使用了完成了一个使用了 Spring boot 和 MySql 的接口，其实掌握到这里，就已经算是后台入门了，写一些简单的接口来做个 App 已经没有问题了，但是如果要做一个真正的产品级别的项目，还有很多东西是要了解的，学习了下篇文章中的知识点你就可以独立完成一个产品级别的 APP 后台，自己搞定前后端！")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),a("p",[t._v("自己做个app却苦于不会开发后台，其实后天开发并不难~~~~")]),t._v(" "),a("p",[t._v("这个系列让移动开发者会开发后台，好处：能自己写产品，点亮技能树，会后台开发在面试中也是一个加分项。")]),t._v(" "),a("p",[t._v("举个例子 返回一个helloword")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"给移动开发者的后端入门教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给移动开发者的后端入门教程","aria-hidden":"true"}},[this._v("#")]),this._v(" 给移动开发者的后端入门教程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("本文状态")]),this._v(" "),s("p",[this._v("还没写完")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("首先，这几篇文章是讲怎么入门写后台的，然后，我是一个 Android 开发者")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("我写这几篇文章并不是因为我转后台了，而是我在业余开发中，发现能够自己写 APP 和后台是一件很爽的事情。先后写了有 5 款后台+App，虽然至今还没有上架过什么产品，但在这个过程中也积累了不少经验，而且我相信，距离我在应用商店上架一款独立开发的 App 已经不远了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("接下来的三篇文章，将讲解从安装 IDE 开始，到把后台上线到云服务器中涉及的全部知识点(真的三篇就足够了)，使用的语言为 Java/Kotlin，框架为 Spring boot，数据库为 Mysql")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("所以，这几篇文章比较适合想学会后台开发的移动开发者，点亮新的技能，相信我，从零到可以完成正常业务接口开发的水平绝对用不了 10 个小时")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("例：一个简单的接口")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/sayHello"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上面的代码很简单吧？其实这就是一个接口，方法上面的注解声明了它的请求路径为"),s("code",[this._v("/sayHello")]),this._v(",接下来我们用 Postman 模拟一个 Get 请求来测试一下这个接口。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%883.29.27.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_1-创建工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建工程","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 创建工程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",[s("li",[this._v("选择 Spring Initializr ，其他选项默认，然后下一步。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%889.00.47.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",{attrs:{start:"2"}},[s("li",[this._v("填写 Artifact(组名，随便写)，选择 Type 为 Gradle Project，选择 Packaging 为 Jar。下一步")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%888.56.17.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",{attrs:{start:"3"}},[s("li",[this._v("选择需要的模块，Web、JPA、MySql，下一步。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%888.57.02.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%889.01.53.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_2-编写第一个接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-编写第一个接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.编写第一个接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("首先，来看一下项目的结构。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-20_%E4%B8%8B%E5%8D%8810.00.36.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("编译器为我们在代码目录下生成了一个 HelloWorldApplication 类，这个类是 Spring boot 的启动类，就是整个程序的入口，你可以把它看做一个 main 方法。")]),this._v(" "),s("li",[this._v("resource 文件夹下有个 application.properties 文件，这个文件现在是空的，它是项目的配置文件，例如数据库的用户名和密码就是在这里配置的。")]),this._v(" "),s("li",[this._v("build.gradle 文件，这里面声明了项目应用的插件，依赖的库等。 Android 开发的小伙伴可以说是非常熟悉了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("接下来在代码目录中新建一个名为 HelloController 的类。并按如下编写。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HelloController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/hello"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可以看到，这个类里只有一个返回字符串的方法，并用到了"),s("code",[this._v("@RestController")]),this._v("和"),s("code",[this._v("@RequestMapping")]),this._v("两种注解。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("其中"),a("code",[t._v("@RestController")]),t._v("表示这是一个 Restful 类型的控制器，具体含义会在后面说。   "),a("code",[t._v('@RequestMapping("/")')]),t._v(" 表示这个类的请求路径为根路径。"),a("code",[t._v('@RequestMapping("/hello")')]),t._v("表示 hello 方法的请求路径为"),a("code",[t._v("/hello")]),t._v("。也就是说，如果我们请求"),a("code",[t._v("http://host/hello")]),t._v("这个地址，会得到后台返回给我们的字符串 hello world。接下来我们点击 Run 按钮来运行一下。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("咦，项目报错了，并没有运行起来，提示如下的错误信息。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Description:\nFailed to configure a DataSource: 'url' attribute is not specified and no embedded datasource could be configured.\nReason: Failed to determine a suitable driver class\nAction:\nConsider the following:\n\tIf you want an embedded database (H2, HSQL or Derby), please put it on the classpath.\n\tIf you have database settings to be loaded from a particular profile you may need to activate it (no profiles are currently active).\nProcess finished with exit code 1\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 application.properties 中添加数据库配置")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.url")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://127.0.0.1/database_name?")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.username")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("username")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.datasource.password")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("password")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("根据上面的格式填写好你的数据库名，用户名和密码，就可以正常运行项目了。Spring boot 默认是运行在 8080 端口的，所以我们第一个接口的请求地址是 "),s("code",[this._v("http://localhost:8080/hello")]),this._v("，用 Postman 模拟个 get 请求试一下吧。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"_3-第二个接口-验证用户登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-第二个接口-验证用户登录","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 第二个接口:验证用户登录")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("现在的项目结构")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-21_%E4%B8%8B%E5%8D%888.17.46.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("p",[t._v("entity：这个包用来存放 JavaBean，也就是实体，实体和数据库中的表是一一对应的。")])]),t._v(" "),a("li",[a("p",[t._v("repository：这个包是用来存放 JpaRepository 的，包中的类 entity 中的类也是对应关系，一个实体对应一个 JpaRepository，我们在这里实现 Jpa 提供的接口，就可以方便的对数据库进行任何增删改查操作。")])]),t._v(" "),a("li",[a("p",[t._v("service：这个包是对 JpaRepository 进行操作的，在这里实现一些业务操作，例如从数据库中取出用户名为 张三 的用户，并和用户传进来的密码进行对比。")])]),t._v(" "),a("li",[a("p",[t._v("controller：这个包中存放的是控制器，控制器的作用是接收网络请求，进行处理并返回处理结果。")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("一个基本的后台结构就是上面这样，接下来看一下后台是怎么处理一个网络请求并返回结果的:")])]),t._v(" "),a("li",[a("p",[t._v("当一个网络请求到达后台，会由 Controller 负责接收，并调用相应的 Service 进行业务处理")])]),t._v(" "),a("li",[a("p",[t._v("如果是涉及数据库的操作，Service 会调用 Repository 对数据库进行增删改查，并把结果返回给 Controller。")])]),t._v(" "),a("li",[a("p",[t._v("最后由 Controller 将结果返回给请求者。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sequence extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("title: 后台处理网络请求时序图\n客户端-Controller: 发送请求\nController->Service:调用\nService->Repository:调用\nRepository->数据库:增删改查\n数据库->Repository:返回结果\nRepository->Service:返回结果\nService->Controller:返回结果\nController->客户端:返回结果\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_1-创建-user-实体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建-user-实体","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 创建 User 实体")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 entity 包中创建 User 类如下:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Entity")]),t._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Table")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"user"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Id")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@GeneratedValue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strategy "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" GenerationType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AUTO"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    String username"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    String password"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getId")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setId")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("getUsername")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" username"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String username"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" username"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("getPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" password"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String password"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("password "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" password"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_2-创建-jparepository-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建-jparepository-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 创建 JpaRepository 接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 repository 包中创建 UserRepository 接口如下：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Repository")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserRepository")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CrudRepository")]),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("User"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Long"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" User "),a("span",{attrs:{class:"token function"}},[t._v("findByUsernameAndPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String username"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String password"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_3-创建-service-处理登录逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-service-处理登录逻辑","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 创建 Service 处理登录逻辑")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("service 包中创建 UserService 类如下:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    UserRepository userRepository"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("checkLogin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String username"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String passowrd"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        User user "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" userRepository"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("findByUsernameAndPassword")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" passowrd"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" null"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"登录成功"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"登录失败"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_4-创建-controller-来处理客户端请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-controller-来处理客户端请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 创建 Controller 来处理客户端请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("controller 包中创建 UserController 类如下:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/user"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UserController")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    UserService userService"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String username"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String password"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userService"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("checkLogin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_5-配置-jpa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-jpa","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 配置 JPA")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("#jpa config")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.jpa.database")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("MYSQL")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.jpa.show-sql")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.jpa.hibernate.ddl-auto")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("update")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.jpa.hibernate.naming-strategy")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("org.hibernate.cfg.SpringPhysicalNamingStrategy")]),t._v("\n"),a("span",{attrs:{class:"token attr-name"}},[t._v("spring.jpa.properties.hibernate.dialect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token attr-value"}},[t._v("org.hibernate.dialect.MySQL5Dialect")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"_6-验收成果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-验收成果","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 验收成果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("我在 user 表中添加了 username 为 tom，password 为 123 的记录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-21_%E4%B8%8B%E5%8D%8810.25.14.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("使用 postman 模拟了一个请求来验证接口。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://o8adsxziw.bkt.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-05-21_%E4%B8%8B%E5%8D%8810.26.30.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("下篇文章内容预览：")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("Jpa 高级用法(查询分页，查询排序等)")]),t._v(" "),a("li",[t._v("如何构建统一的返回体，自定义返回状态码")]),t._v(" "),a("li",[t._v("如何支持用户身份鉴权(token鉴权等)")]),t._v(" "),a("li",[t._v("如何写单元测试")]),t._v(" "),a("li",[t._v("自动生成接口文档")])])}],!1,null,null,null);e.options.__file="给移动开发者的后端教程一.md";s.default=e.exports}}]);