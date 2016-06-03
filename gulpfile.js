var gulp = require('gulp'),
	fs = require('fs'),
	git = require('git-rev-sync'),
	rev = require('gulp-rev'),
	inject = require('gulp-inject');

/*gulp.task('removeLeadingSlashFromScriptSrouce', function() {
	var content = fs.readFileSync('index.html', 'utf8');
	var replacedContent = content.replace(/(\<script src=")\/(script)/g, "$1$2");
	fs.writeFileSync('index.html', replacedContent);
});

gulp.task('appendCommitShaToCss', function() {
	git.short(function(sha){
		var content = fs.readFileSync('index.html', 'utf8');
		var replacedContent = content.replace(/(\.css)/g, "$1?ver=" + sha);
		fs.writeFileSync('index.html', replacedContent);
	});
})

//gulp.task('appendCommitShaToCss', function() {
gulp.task('appendCommitShaToCss', function() {
	git.short(function(sha){
		console.log(sha);
	});
});*/


gulp.task('prepareAssetsForBuild', function() {
	var content = fs.readFileSync('index.html', 'utf8');

	var replacedContent = content
		// Update /script/ --to--> script/
		.replace(/(\<script src=")\/(script)/g, "$1$2")
		// Update *.css --to--> *.css?v=ticks
		.replace(/(\.css)/g, "$1?v=" + (new Date()).getTime());

	fs.writeFileSync('index.html', replacedContent);
});

gulp.task('default', function(){
	//run tasks individually - to see the effect of each task
	//gulp.start('removeLeadingSlashFromScriptSrouce', 'appendCommitShaToCss');

	//run both script and css changes in one go
	gulp.start('prepareAssetsForBuild');
});
