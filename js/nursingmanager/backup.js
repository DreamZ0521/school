layui.use('laydate',
	function() {
		var laydate = layui.laydate;
        //执行一个laydate实例
        laydate.render({
        elem: '#start' //指定元素
    });
    //执行一个laydate实例
    laydate.render({
		elem: '#end' //指定元素
    });
});
layui.use('table',
	function() {
		var table = layui.table;
        //监听单元格编辑
        table.on('edit(test)',
			function(obj) {
				var value = obj.value //得到修改后的值
				,
				data = obj.data //得到所在行所有键值
				,
				field = obj.field; //得到字段
				layer.msg('[ID: ' + data.id + '] ' + field + ' 字段更改为：' + value);
			}
		);
        //头工具栏事件
        table.on('toolbar(test)',
			function(obj) {
				var checkStatus = table.checkStatus(obj.config.id);
				switch (obj.event) {
					case 'getCheckData':
						var data = checkStatus.data;
						layer.alert(JSON.stringify(data));
						break;
					case 'getCheckLength':
						var data = checkStatus.data;
						layer.msg('选中了：' + data.length + ' 个');
						break;
					case 'isAll':
						layer.msg(checkStatus.isAll ? '全选': '未全选');
						break;
				};
			}
		);
    }
);
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b393d153aeb26b46e9431fabaf0f6190";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();