//包装函数
module.exports = function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg:grunt.file.readJSON('package.json'),

		//uglify插件的配置信息
		uglify:{
			//options允许生成的压缩文件带banner
			/*options:{
				stripBanners:true,
				banner:'/*!<%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%>*/\n'
			/*},
			//build配置了源路径，源文件和目标路径，文件名
			build:{
				src:'js/panel.js',
				dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
			}*/
			 my_target: {
		        files: [{
		          expand: true,
		          cwd: 'js',
		          src: '**/*.js',
		          dest: 'dest'
		        }]
		      }
		  }
		},

		 //jshint插件的配置信息
		jshint:{
			//描述要通过什么规则检查语法
			options:{
				jshintrc:'.jshintrc'
			},
			//描述jshint要检查哪些文档的语法
			build:[]
		},

		 //watch插件的配置信息
		watch:{
			build:{
				files:['js/*.js'],  //要监控哪些文件的变化
				tasks:['jshint','uglify'], //当文件变化时要执行那些插件
				options:{ spawn : false }
			}
		}

	});
	//告诉grunt当我们在终端输入grunt时要做些什么
	grunt.registerTask('default',['uglify','jshint','watch']);
	//让grunt加载uglify插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//让grunt加载uglify插件
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//让grunt加载uglify插件
	grunt.loadNpmTasks('grunt-contrib-watch');
};