var gulp = require('gulp'),
	fs = require('fs');

gulp.task('removeLeadingSlashFromScriptSrouce', function() {
	var content = fs.readFileSync("index.html", "utf8");
	var replacedContent = content.replace(/(\<script src=")\/(script)/g, "$1$2");
	fs.writeFileSync('index.html', replacedContent);
});

gulp.task('appendCommitShaToCss', function() {

});

gulp.task('default', function(){
	gulp.start('removeLeadingSlashFromScriptSrouce', 'appendCommitShaToCss');
});
