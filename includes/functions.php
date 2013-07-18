<?php

require_once(dirname(__FILE__).'/settings.php');

//generates the layout of pages randomly
function pageRoadmap($size = 5){
	$dirs = array('n','e','s','w');
	$direction = 2;//direction to get to current from prev
	
	$roadmap = array('s','s');
	
	for($i=2;$i<$size;$i++){
		$rand = rand(0,3);
		while($rand == ($direction + 2)%4){//if random is opposite then re-roll
			$rand = rand(0,3);
		}
		$direction = $rand;
		array_push($roadmap,$dirs[$rand]);
	}
	
	return $roadmap;
}

function getArrow($color,$dir,$num){
	switch ($dir){
		case 'n':
			$dir = 'up';
			break;
		case 'e':
			$dir = 'right';
			break;
		case 's':
			$dir = 'down';
			break;
		case 'w':
			$dir = 'left';
			break;
		default:
			$dir = 'down';
			break;
	}
	return "<a href='#' class='pointer pointer{$num} {$color}_{$dir}'></a>";
}

function printArrow($color,$dir,$num){
	echo getArrow($color,$dir,$num);
}