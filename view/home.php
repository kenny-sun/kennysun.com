<?php
include_once(dirname(__FILE__).'/../includes/functions.php');
$roadmap = pageRoadmap();
?>
<a href="#" class="pointer pointer1 black_down" style="position:absolute;left:50%;top:50%;"></a>
<?php
	for($i=2;$i<=4;$i++){
		printArrow('black',$roadmap[$i],$i);
	}
?>
<div id="page_first" >(photosensitive epilepsy warning)</div>
<div class="page page_<?php echo $roadmap[1]; ?>">
	<div>
		<h3>[Developer]</h3>
		<a href="docs/resume.docx" target="_blank">Resume</a><br />
		<a href="http://mrsunstudios.com" target="_blank">Flash Game Portfolio</a>
	</div>
</div>
<div class="page page_<?php echo $roadmap[2]; ?>">
	<div>
		<h3>[Photographer]</h3>
		<a href="http://kennysunphoto.com" target="_blank">Photography Portfolio</a><br />
		<a href="http://flickr.com/kennyysun" target="_blank">Flickr</a>
	</div>
</div>
<div class="page page_<?php echo $roadmap[3]; ?>">
	<div>
		<h3>[Social Media]</h3>
		<a href="http://facebook.com/kennyysun" target="_blank">Facebook</a><br />
		<a href="http://twitter.com/kennyysun" target="_blank">Twitter</a><br />
		<a href="http://www.linkedin.com/pub/kenny-sun/37/349/50/ target="_blank"">LinkedIn</a>
	</div>
</div>
<div class="page page_<?php echo $roadmap[4]; ?>">
	<div>
		<a href="mailto:kenny@kennysun.com">kenny@kennysun.com</a>
		
	</div>
</div>