# coding=utf-8
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import time
import sys


def look_for_signature():
	driver.refresh()
	if(driver.current_url != url):
		login()
	elements = driver.find_elements_by_css_selector("form");
	if(elements == []):
		print("Pas de signature")
	else:
		print("une signature a faire !!")
	

def login():
	print("login")
	usernameInput = driver.find_element_by_id("username")
	passwordInput = driver.find_element_by_id("password")
	usernameInput.send_keys(username)
	passwordInput.send_keys(password)
	driver.find_element_by_name("submit").click()
	if(driver.current_url != url):
		print("ERROR : Error in login page")
		stop()
	print("loged")
	look_for_signature()

def checkParameters():
	# Check number of arguments
	if(len(sys.argv) != 4):
		print("ERROR : Arg != 3")
		stop()
	global delay
	global username
	global password
	delay = int(sys.argv[1])
	username = sys.argv[2]
	password = sys.argv[3]
	print(delay,username,password)
	
def stop():
	print("stopping")
	driver.close() 
	driver.quit() 
	exit()
def main():
	checkParameters()
	driver.get(url)
	try:
		while True:
			look_for_signature()
			time.sleep(delay)
	except KeyboardInterrupt:
		stop()	

url = "https://odin.iut-clermont.uca.fr/professionnalisation/?p=signature"
driver = webdriver.Firefox()
main()