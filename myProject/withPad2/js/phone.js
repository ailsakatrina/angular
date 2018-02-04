/**
 * @file 本js控制取号手机界面
 * @author xxt
 * @version v0.1
 */
var phone = {
    /**
     * 函数说明：显示取号时间
     */
    show : function(){
        mydate = new Date();
        str = "" + mydate.getFullYear() + "-";

        month = (mydate.getMonth()+1);
        date = mydate.getDate();
        hour = mydate.getHours();
        minute = mydate.getMinutes();
        second = mydate.getSeconds();
        if(month<10){
            str += '0' + month + "-";
        }
        else{
            str += month + "-";
        }

        if(date<10){
            str += '0' + date + " ";
        }
        else{
            str += date + " ";
        }

        if(hour<10){
            str += '0' + hour + ":";
        }
        else{
            str += hour + ":";
        }

        if(minute<10){
            str += '0' + minute + ":";
        }
        else{
            str += minute + ":";
        }

        if(second<10){
            str += '0' + second + "";
        }
        else{
            str += second + "";
        }


        $('#time').html(str);
    },
    /**
     * 获取url
     * @return theRequest {dict}
     */
    getRequest:function() {
        var url = location.search;
        var theRequest = {};
        var index = url.indexOf("?");
        if (index !== -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },

    /**
     * 函数说明：提取url参数
     */
    getResult : function() {
        var result = {};
        result = this.getRequest();
        var ticketNum, queueNum, userType, padCode;
        ticketNum = result["ticketNum"].toUpperCase();//票号
        queueNum = result["queueNum"];//队列中人数
        padCode = result["padCode"];//iPad解锁码
        queueId = result["queueId"];//queueId

        this.setParaTypeValue(ticketNum + "_" + queueId);
        if (typeof(padCode) == "undefined") {
            $("#pad").hide();
        }
        userType = queueType[ticketNum.substring(0, 1).toUpperCase()];
        $('#ticketNum').html(ticketNum);
        $('#queueNum').html(queueNum);
        $('#userType').html(userType);
        $('#padCode').html(padCode);
    },
    initial : function(){
        //time
        this.show();

        //解析url
        this.getResult();

        //禁用页面下拉
        // document.querySelector('body').addEventListener('touchstart',function (event) {
        //     event.preventDefault();
        // });
        // document.querySelector('body').addEventListener('touchmove',function (event) {
        //     event.preventDefault();
        // });


    },
    /**
     * 设置二维码扫描状态
     * @param {string} paraType 要设置的二维码type
     */
    setParaTypeValue: function(paraType) {
        _paraTypeValue = paraType;
        console.log('set paraType:' + _paraTypeValue);
        $.ajax({
            type: "POST",
            data: { 'paraType': _paraTypeValue, 'paraValue': '1', 'paraNotes': 'shouxianquhaoQR' },
            url: "http://112.74.34.118/interfaceapp/setParaValue/",
            cache: false,
            dataType: "json",
            success: function(data, statues, xml) {
                var result = data.result;
                if (result == 'success') {
                    console.log('二维码值设置成功');
                } else {
                    console.log("二维码值设置失败");
                }

            },
            error: function() {
                console.log(URL + " ajax通信失败");
            }
        });
    },

};
