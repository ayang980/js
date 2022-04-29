"ui";
function sjcl() {
    let d = ["red", "green", "blue", "purple"]
    let y = random(0, 3)
    return d[y]
}
var isFold = false,
    isRunning = false,
    isRotate = null;
var ys = sjcl();
var h = device.height;
var w = device.width;
var QQ = "1839542561";
var QQ群 = "";
var 软件名 = "快手极速版"
var 包名 = "com.zhonglibang.zlb"

var lj = "https://shimo.im/docs/t00X4PgLCKEGuqIb/"
var a = http.get(lj + "read").body.string().split("代理商")[1];
var 自定义内容 = http.get(lj + "read").body.string().split("自定义内容")[1];
var 内容 = http.get(lj + "read").body.string().split("内容")[1];
var 自定义标题 = http.get(lj + "read").body.string().split("自定义标题")[1];
var 本地内容 = http.get(lj + "read").body.string().split("本地内容")[1];
var 自定义取消 = http.get(lj + "read").body.string().split("自定义取消")[1];
var 自定义进群 = http.get(lj + "read").body.string().split("自定义进群")[1];

dialogs.build({
    title: "欢迎使用"+软件名+"脚本",
    titleColor: ys,
    content: "作者QQ:" + QQ + "\n",
    contentColor: ys,
    cancelable: true,
    positive: "加入Q群",
    positiveColor: ys,
    neutral: "取消",
    neutralColor: ys,
    negative: "联系作者",
    negativeColor: ys
}).on("positive", () => {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" + QQ群,
        packageName: "com.tencent.mobileqq",
    });
    toast("加入Q群")
}).on("negative", () => {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?uin=" + QQ,
        packageName: "com.tencent.mobileqq",
    })

    toast("联系作者")
}).on("neutral", () => {
    //取消键
    toast("返回")

}).show();



if (a == 1) {
    
} else if (a == 2) {
    toastLog("有新版本")
    dialogs.build({
        //对话框标题
        title: "发现新版本",
        //对话框内容
        content: 内容,
        neutral: "取消",
        //左边


        negative: "群内下载最新版",
        //右边


    }).on("negative", () => {
        //监听中性键
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?card_type=group&uin=" + QQ群,
            packageName: "com.tencent.mobileqq",
        })

    }).on("check", (checked) => {
        //监听勾选框
        log(checked);
    }).show();
} else if (a == 3) {
    dialogs.build({
        //对话框标题
        title: 自定义标题,
        //对话框内容
        content: 自定义内容,
        //确定键内容

        //取消键内容
        neutral: 自定义取消,
        //中性键内容
        positive: 自定义进群,
        //勾选框内容
        // checkBoxPrompt: "不再提示"
    }).on("positive", () => {
        //监听确定键

    }).on("positive", () => {
        //监听中性键
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?card_type=group&uin=" + QQ群,
            packageName: "com.tencent.mobileqq",
        })
    }).on("check", (checked) => {
        //监听勾选框
        logstr(checked);
    }).show();
} else if (a == 4) {

    exit()
}


ui.layout(
    <vertical
    bg="file://res/1.jpg">
    
    
 
    
    
    
    <vertical>
        
        <toolbar w="*" h="auto" >
            <text  id="toolbar" text="快手极速版" layout_gravity="center" textSize="23sp" textColor="#ed1941" typeface="monospace"/>
        </toolbar>
        
        
    </vertical>
    
    <horizontal>
        <text text="说明：" textColor="#ed1941"/>
        <TextView id="tv_text" singleLine="true" ellipsize="marquee" focusable="true" text="快手极速版脚本！用户分辨率不同，如遇脚本无法使用情况，可联系下方作者！" textColor="#ed1941"/>
    </horizontal>
    
    
    <card w="*" h="40" cardBackgroundColor="#000000" margin="1 1 1 1" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="3dp">
        <card w="*" h="36"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
            
            <linear orientation="horizontal">
                
                <Switch id="autoService"  text="无障碍服务" w = "150" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                <Switch id="cs" textSize="11sp" layout_weight="1" hint="点击左边按钮转跳到 开启无障碍" gravity="center" w="18" singleLine="true"/>
                
            </linear>
            
        </card>
        
        
        
    </card>
    <card w="*" h="40" cardBackgroundColor="#000000" margin="1 1 1 1" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="3dp">
        <card w="*" h="36"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
            
            <linear orientation="horizontal">
                
                <Switch id="xfc"  text="悬浮窗权限" w = "150" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
                <Switch id="cs" textSize="11sp" layout_weight="1" hint="仅需要开启1次此后可无视该开关" gravity="center" w="18" singleLine="true"/>
                
                
                
            </linear>
            
        </card>
        
        
        
    </card>

            <card h="60" bg="#F0FFFF" >
                <horizontal>
                    <spinner id="gn" textSize="11" gravity="center" w="150" entries="刷视频" />
                    <button id="ksyx" style="Widget.AppCompat.Button.Borderless" id="start" text="开始运行" />
                    <button id="jsyx" style="Widget.AppCompat.Button.Borderless" text="结束运行" />
                    
                </horizontal>
                
            </card>


    <frame height="800" gravity="center">
        
        <vertical>
            
            
            
            
            <card w="*" h="0" cardBackgroundColor="#000000" margin="1 1 1 1" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="3dp">
                <card w="*" h="1"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
                    
                    
                    
                </card>
                
                
                
            </card>
            
            
            <card w="*" h="250" cardBackgroundColor="#ffd400" margin="1 1 1 1" cardElevation="1dp" gravity="center_vertical" alpha="0.5" cardCornerRadius="3dp">
                <card w="*" h="296"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
                    <vertical>
                        <text text="脚本制作不易 且行且珍惜。一切后果作者不承担。更多项目脚本欢迎加入QQ群。"textSize="15sp"textColor="#DC143C" />
                        
                        
                        
                        <text text="脚本说明:"  textSize="16sp"textColor="#2a5caa" />
                        
                        <text text="1.运行脚本前先开启无障碍和悬浮窗模式" textColor="#2a5caa" />
                        <text text="2.运行脚本前请先将软件打开" textColor="#2a5caa" />
                        <text text="3.若手机低于安卓7.0则不能运行 请自行卸载" textColor="#2a5caa" />
                     
                    </vertical>
                </card>
                
                
            </card>
            
            <card w="*" h="40" cardBackgroundColor="#f8aba6" margin="1 20 1 1" cardElevation="1dp" gravity="center_vertical" alpha="0.6" cardCornerRadius="3dp">
                <card w="*" h="36"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
                    
                    <text id="lx"text="作者QQ"textColor="red"gravity="center" />
                    
                </card>
                
                
            </card>
            <card w="*" h="40" cardBackgroundColor="#2b4490" margin="1 20 1 1" cardElevation="1dp" gravity="center_vertical" alpha="0.6" cardCornerRadius="3dp">
                <card w="*" h="36"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
                    
                    <text id="jr"text="点我加入脚本群"textColor="red"gravity="center" />
                    
                </card>
                
                
            </card>
            
            <card w="*" h="40" cardBackgroundColor="#000000" margin="1 20 1 1" cardElevation="1dp" gravity="center_vertical" alpha="0.6" cardCornerRadius="3dp">
                <card w="*" h="36"  cardCornerRadius="2dp" margin="2" cardElevation="1dp" gravity="center_vertical" alpha="1" cardCornerRadius="1">
                    
                    <text id="xz"text="下载软件"textColor="red"gravity="center" />
                    
                </card>
                
                
            </card>
            
            
        </vertical>
        
        
        
        
    </frame>
    
    
    
    
    </vertical>
);


ui.tv_text.setSelected(true);

ui.xz.on("click", () => {
    app.openUrl("https://m.zhonglb.com/#/register?inviteID=209177")
    //上面是点击下载地址跳转的链接
})

ui.lx.click(function() {
    toast("欢迎反馈bug😘")
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=1&uin=" + QQ,
        packageName: "com.tencent.mobileqq",
    })
})
ui.jr.click(function() {
    toast("欢迎你")
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" + QQ群,
        packageName: "com.tencent.mobileqq",
    });
})

ui.autoService.on("check", function(checked) {
    toastLog("找到对应脚本，开启无障碍模式")
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});
ui.xfc.on("check", function(checked) {
    toastLog("点击开关开启悬浮窗权限")

    console.show();
});












// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function() {
    var gn = ui.gn.getSelectedItemPosition()
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请开启无障碍服务🤪");
        return;
    }
    if (auto.service == null) {
        toast("请开启无障碍服务")
        return;
    } else {

        ////////////////////////////悬浮窗开关

        threads.start(function() {
            
           if(gn==0) {
            刷视频()
           } else{
               
                toast("开始准备领红包💰")
                launchApp("快手极速版")
                sleep(2000)
                toast("请将页面调至✈️拼团失败✈️红包页面！")
                sleep(2000)
                toast("等待3秒💚💙❤️")
                sleep(3000)
                toast("👊👊👊👊开始")
                m=0;
        while (true) {
            if(id("circular_progress_bar").boundsInside(882,375,1026,519).findOnce()){
                sleep(10000)
                gesture(500,
            [device.width / 2, (device.height / 2) + (device.height / 2) / 2],
            [random(50, device.width - 50), device.height / 10])
            }
            if(!packageName("com.kuaishou.nebula").id("circular_progress_bar").boundsInside(882,375,1026,519).findOnce()){
                gesture(500,
            [device.width / 2, (device.height / 2) + (device.height / 2) / 2],
            [random(50, device.width - 50), device.height / 10])
            }
            if(id("circular_progress_bar").boundsInside(882,375,1026,519).findOnce() && id("landscape_screen_entrance_btn").findOnce()){
                toast("视频页面")
                sleep(10000)
                gesture(500,
            [device.width / 2, (device.height / 2) + (device.height / 2) / 2],
            [random(50, device.width - 50), device.height / 10])
            
            }
            if(id("tvMoney").findOnce()){
               sleep(1000)
               click(100,150)
            }
            if (text("已领取红包").boundsInside(798,500,1008,700).findOnce()) {
                 gestures([350,[798, 1169],[798, 333]]);
                 m++;       
                 if (m>105) {
                   back()
                   media.playMusic("./res/温柔.mp3")
                   launchApp("众力邦刷资讯")
                   sleep(5000)
                   toast("红包领取完毕啦😂")
                   media.stopMusic()
                   threads.shutDownAll()
                    }
            }

            if(text("复制").bounds(671,821,803,941).findOnce()){
                sleep(1000)
                gestures([350,[798, 1169],[798, 567]]);
            }
            
        }
                
            }
            

                
            

    
}




        )
    }
})






function md5(str) {
    return $crypto.digest(str, "MD5")
}




function 刷视频() {



    threads.start(function() {
        var b = http.get(lj + "read").body.string().split("关闭运行")[1];

        if (b != 1) {
            for (;;) {
                toastLog(自定义内容)
                logstr(自定义内容)
                sleep(250)
            }
        }







        //下面是运行代码
        //请求截图，用找图方法，第一个就要先写的请求截图代码，不然找图没法用
        if (!requestScreenCapture()) {
            toast("请求截图失败");
            exit();
        }

        /////////////////////悬浮窗/////////////////////

        console.hide()
        sleep(1000)
        console.show();
        sleep(1000);
        console.log("调整大小");
        console.setSize(700,device.height / 2-500 );

        console.log("调整位置");
        console.setPosition(0, 0);







        auto.waitFor()
        console.info("正在打开快手极速版")
        launchApp("快手极速版")
        console.log("等待一秒后运行")
        toastLog("开始运行，结束按音量键+")
        a = 1;
        sleep(1000)
        while (true) {
            s=currentPackage()
            if(s!="com.kuaishou.nebula"){
            console.log("检测到当前页面不在快手极速版")
            console.log("等待10秒返回快手极速版")
            sleep(10000)
            console.info("返回快手极速版")
            launchApp("快手极速版")
            toast("如需结束脚本请按音量键+ 并清理后台脚本程序⭕️")

            }
            if(id("landscape_screen_entrance_btn").boundsInside(33,900,141,1224).findOnce()){
                toast("随机等待30—60秒 结束运行按音量+")
                let time=random(30000,60000)
                sleep(time)
                gesture(500,
            [device.width / 2, (device.height / 2) + (device.height / 2) / 2],
            [random(50, device.width - 50), device.height / 10])
                console.info("第"+a+"次刷视频成功"+ time /1000 +'秒')
                a++
            }
            if(id("circular_progress_bar").boundsInside(device.width-300,device.height/2-900,device.width,device.height/2-600).findOnce()){
                    
               randomUpSildeScreen();//模仿人类随向上滑动一次，表示对这个视频有兴趣
               randomDownSildeScreen();//模仿人类随连续下滑2次，表示对当前视频无兴趣
               randomHeart();//模仿人类随随机点赞
               slideScreenDown(device.width / 2, device.height-200, device.width / 2, 500, 300);
            }else{
                toast("页面无红包")
                sleep(1000)
                gesture(500,
            [device.width / 2, (device.height / 2) + (device.height / 2) / 2],
            [random(50, device.width - 50), device.height / 10])
            }
              
            
            
        
            

        }
        
    })

}
    
ui.jsyx.click(function () {
    threads.shutDownAll()
    toast("结束运行成功⭕️")

})

/**
 * 屏幕向下滑动并延迟8至12秒
 */
function slideScreenDown(startX, startY, endX, endY, pressTime) {
    let delayTime = random(4000, 10000);
    sleep(delayTime);//模仿人类随机时间
    swipe(startX, startY, endX, endY, pressTime);
    console.info("第"+a+"次刷视频成功"+delayTime / 1000 + "秒")
    a++
}
/**
 * 随机上滑（防止被判定是机器）上滑后停留时间至少是10S，造成假象表示是对内容感兴趣
 * 点赞和关注先不搞。
 */
function randomUpSildeScreen(){
    let randomIndex = random(1, 50);
    if(randomIndex==1){
        console.log("快手极速版随机上滑被执行了!!!");
        pressTime = random(200, 500);
        swipe(device.width / 2, 500, device.width / 2, device.height-200, 300);
        delayTime = random(10000, 15000);
        sleep(delayTime);
    }
}
/**
 * 连续下滑对上一个无兴趣
 * 其实得和上滑做个排他，既然无兴趣不要在上滑
 */
function randomDownSildeScreen(){
    let randomIndex = random(1, 50);
    if(randomIndex==1){
        console.log("连续下滑被执行了");
        swipe(device.width / 2, device.height-200, device.width / 2, 500, 300);
        sleep(2000);
        swipe(device.width / 2, device.height-200, device.width / 2, 500, 300);
        
    }
}
 
/**随机点赞并休息一秒 */
function randomHeart() {
    index = random(1, 50);
    if (index == 6) {
        var target = id('a4l').findOnce();
        if (target == null) {
            return;
        } else {
            target.click();
            sleep(1000);
            console.log("随机点赞并休息一秒");
        }
    }
}
function randomFollow(){
    index = random(1, 100);
    if (index == 66) {
        var target = id('nebula_thanos_bottom_follow_button_layout').findOnce();
        if (target == null) {
            return;
        } else {
            target.click();
            sleep(1000);
        }
    }
}

function  控件点击(dshuxing,  dzhi,  dname)  {

    var  a  =  dshuxing(dzhi).boundsInside(0,  0,  device.width,  device.height).findOnce();

    if  (a  !=  null)  {

        var  x1  =  a.bounds().left;

        var  x2  =  a.bounds().right;

        var  y1  =  a.bounds().top;

        var  y2  =  a.bounds().bottom;

        var  x  =  random(Math.floor(x1  +  1),  Math.floor(x2  -  1)); //删除控件四周1的边界，防止边框位置点击无效

        var  y  =  random(Math.floor(y1  +  1),  Math.floor(y2  -  1));

        var  timedelay  =  random(50,  150);

        log("点击 ["  +  dname  +  "]");

        press(x,  y,  timedelay);

        sleep(1000);

        return  true;

    } 
    else  {

        //toastLog("无法找到 ["  +  dname  +  "]");

     
       //其他内容
      

    }
}