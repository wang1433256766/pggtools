#!/usr/bin/env python
# -*- coding: utf8 -*-
# bk_mysql @ Python
# Functions: 
# Created By HavenShen on 2016-03-23,Version 0.1

import sys,os,time

file_name = 'bug.md'
file_path = '/Users/HavenShen/Desktop/gogit/'

def check_file():
	if not os.path.exists(file_path + file_name):
		f = open(file_path + file_name,'w')
		f.write(str(time.time()) + '\n')
		f.close()

def add_file_line():
	f = open(file_path + file_name,'a+')
	f.write(str(time.time()) + '\n')
	f.close()


def file_handle():
	check_file()
	add_file_line()

if __name__ == "__main__":
	file_handle()
	print 'ok'
